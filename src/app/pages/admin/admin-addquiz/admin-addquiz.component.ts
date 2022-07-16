import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-addquiz',
  templateUrl: './admin-addquiz.component.html',
  styleUrls: ['./admin-addquiz.component.css']
})
export class AdminAddquizComponent implements OnInit {

  constructor(private ser:CourseService, private q:QuizService,private r:Router) { }
  get:any={
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    courses:null
  }
  getdata:any=[]
  ngOnInit(): void {
    this.ser.getcourses().subscribe((data)=>{
      this.getdata=data;
    })
  }

  formSubmit()
  {
    this.q.savequiz(this.get).subscribe((data)=>{
      Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
      this.r.navigate(['/admin/quizes'])
    },(error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
    })

  }
}
