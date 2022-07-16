import { LocationStrategy } from '@angular/common';
import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';
import { filter } from 'rxjs/operators'
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-startquiz',
  templateUrl: './startquiz.component.html',
  styleUrls: ['./startquiz.component.css']
})

export class StartquizComponent implements OnInit {
  window: any;
  //prevent right click



  
  //prevent paste
  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }
//prevent copy
  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
    Swal.fire("Don't allow to copy!!!!",'','error')
  }
//prevent cut
  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }


  //detect reload
  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    let pageReloaded = window.performance
     .getEntriesByType('navigation')
     .map((nav) => (nav as any).type)
     .includes('reload');
     console.log(pageReloaded)
     this.re(pageReloaded);
   
 
 }
 
 //logout and submit while refresh
 re(pageReloaded:any)
 {
   if(pageReloaded)
   {
     this.login.islogout()
     this.r.navigate(['login']);
   }
 }






//variables

 kk:boolean=false;
qId:any;
questions:any;

marksgot=0;
correctAnswer=0;
attempted=0;
percentage=0
isSubmit:boolean=false;
lengthquestions=0;

timer:any;



  constructor(
    private locationst:LocationStrategy,
    private route:ActivatedRoute,
    private ser:QuestionService,
    private r:Router,
    public login:LoginserviceService
  ) { }
quizname:any;
k=0;
  ngOnInit(): void {
   
    this.preventBackButton();
    this.qId=this.route.snapshot.params.qid;
    this.loadQuestions();
    this.questionsgivenans=this.questions;

    //protect Tabs
    
    let siteTitle = '';
    let j=1;
    window.addEventListener('blur', () => {
      siteTitle = document.title;
     
    });
    window.addEventListener('focus', () => {
      document.title = siteTitle;
      this.k++
      if(this.k<=3)
      {
        Swal.fire("Don't allow to switch the tabs!!!!",'Count:'+this.k+'/3','error')
        if(this.k==3)
        {
          this.timeoutsubmit();
          j=0;
          
        }
      }  
    });
  
 
   
  }

  //get questions
  questionsgivenans:any;
  loadQuestions() {
    this.ser.getquestionsoftest(this.qId).subscribe((data)=>{
     this.questions=data;
     //timer
     this.timer=this.questions.length * 2 * 60;
     //add key ans
     this.questions.forEach((q:any)=>{
       q['givenAnswer']='';
       q['studentId']=this.login.getuser().id;
       console.log(this.questions)
      
     });
     this.starttimer()
     this.quizname=this.questions[0].quiz.title;
     this.questionsgivenans=this.questions;
     this.lengthquestions=this.questions.length;
    
    })
  }
//prevent back button
  preventBackButton()
  {
    history.pushState(null,location.href);
    this.locationst.onPopState(()=>{
      history.pushState(null,location.href)
    })
  }
//submit quiz
results:any
  submitquiz(){
    
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
        this.ser.evalquiz(this.questions).subscribe((data)=>{
          this.isSubmit=true;
          this.k=10;
          this.results=data;
          console.log(this.results);
        })
      } 
    })

  
  
  }

  home(){
    this.r.navigate(['/student']);
  }
  

  //start timer
  starttimer(){
   let t=window.setInterval(()=>{
     if(this.timer<=0)
     {
      this.timeoutsubmit()
       clearInterval(t);
     }
     else
     {
       this.timer=this.timer-1;
     }
   },1000)
  }

  getFormatTime()
  {
      let mm=Math.floor(this.timer/60);
      let ss=this.timer-mm*60;
      return `${mm}: ${ss} sec`;
  }

  timeoutsubmit()
  {
    this.attempted=0
    this.isSubmit=true
    this.k=10;
       //cal
       this.questions.forEach((q:any)=>{
         if(q.givenAnswer==q.answer)
         {
           this.correctAnswer++;
           
            let m=this.questions[0].quiz.maxMarks/this.questions.length;
            this.marksgot+=m;
            

         }
         if(q.givenAnswer.trim()!='')
            {
              this.attempted++;
            }
        
       });
    
       this.percentage=(this.marksgot/this.questions[0].quiz.maxMarks)*100
      
  }




  
    
  
}
