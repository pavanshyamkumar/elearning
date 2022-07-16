
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-update-questions',
  templateUrl: './admin-update-questions.component.html',
  styleUrls: ['./admin-update-questions.component.css']
})
export class AdminUpdateQuestionsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ser:QuestionService,private rr:Router) { }
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
  quesid:any;
  ngOnInit(): void {
    this.quesid=this.route.snapshot.params.quesId;
    this.ser.getbyid(this.quesid).subscribe((data)=>{
      this.question=data;
    })
  }
  formSubmit(){
    this.ser.updatequestion(this.question).subscribe((data)=>{
      this.rr.navigate(['/admin/quizes']);
      Swal.fire("sucess !!","updated","success");
    },(error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
    })

  }

}
