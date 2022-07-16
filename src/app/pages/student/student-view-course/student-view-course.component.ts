import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/service/content.service';
import { LessionsService } from 'src/app/service/lessions.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultService } from 'src/app/service/result.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-view-course',
  templateUrl: './student-view-course.component.html',
  styleUrls: ['./student-view-course.component.css']
})
export class StudentViewCourseComponent implements OnInit {

  constructor(private r:ActivatedRoute,
   private con:ContentService, 
   private quiz:QuizService,private ser:LessionsService,
   private router:Router,
   private r_ser:ResultService,
   private login:LoginserviceService) { }
Id:any;
cname:any;
getdata:any=[]

term:any;
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.cid;
    this.cname=this.r.snapshot.params.cname;
    this.ser.getbycourse(this.Id).subscribe((data)=>{
      this.getdata=data;
      console.log(data)
    })


    //getattempts count
   
  }
  reloadCurrentRoute(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/student', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }
  content:any=[]
  show:boolean=true;
contentview(lid:any)
{
 
 
    this.con.view(lid).subscribe((data)=>{
      this.content=data
   
    
    })
}
video:any;
download:any;
contentname:any;
qId:any;
showcontent(name:any,downloadlink:any,videolink:any){
 
this.show=false;

this.contentname=name;
this.download=downloadlink;
this.video=videolink;
this.quizshow=false;

}
collapse(){this.show=true;}

quizes:any=[]
openquizes(Id:any){
 this.quiz.getquizesbycourse(Id).subscribe((data)=>{
  this.quizes=data;
 })

}
quizshow:boolean=false;
quiztitle:any;
maxmarks:any;
noofquestions:any;
quizdec:any;
attempts:any={
  k:''
};


results:any={

}


openquiz(qId:any,title:any,description:any,maxMarks:any,numberofQuestions:any){
  this.quizshow=true;
  this.show=true;
  this.qId=qId
  this.quiztitle=title;
  this.maxmarks=maxMarks;
  this.noofquestions=numberofQuestions;
  this.quizdec=description;

  //get attempts count
  this.r_ser.getattempts(this.qId, this.login.getuser().id).subscribe((data)=>{
    this.attempts=data;
    

  })

  //get results of quiz


  this.r_ser.getresults(this.qId, this.login.getuser().id).subscribe((data)=>{
    this.results=data;
  })
  
 


}

openins(qId:any)
{

  if(this.attempts.k>=3)
  {
    Swal.fire('No Attempts Left','you can not attempt this quiz','error')
  }
else
{
  this.router.navigate(['/instructions/'+qId])
}
}

 

//result-show

result(rId:any)
{
  this.router.navigate(['/results/'+rId])
}

}
