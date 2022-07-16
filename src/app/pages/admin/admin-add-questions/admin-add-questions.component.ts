import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add-questions',
  templateUrl: './admin-add-questions.component.html',
  styleUrls: ['./admin-add-questions.component.css']
})
export class AdminAddQuestionsComponent implements OnInit {
  qId:any;
  qtitle:any;
  question:any={
    quiz:{

    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }
  constructor(private route:ActivatedRoute,private ser:QuestionService,private r:Router) { }


  ngOnInit(): void {
    this.qId=this.route.snapshot.params.qId;
    this.qtitle=this.route.snapshot.params.qtitle;
    this.question.quiz['qId']=this.qId;
   
  }
  formSubmit(){
    this.ser.addquestion(this.question).subscribe((data)=>{
      Swal.fire("Sucesss !!","sucessfully added!! ",'success');
      this.r.navigate(['/admin/questions/'+this.qId+'/'+this.qtitle])
    },(error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
    })
  }

}
