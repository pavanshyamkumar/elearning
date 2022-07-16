import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-updatequiz',
  templateUrl: './admin-updatequiz.component.html',
  styleUrls: ['./admin-updatequiz.component.css']
})
export class AdminUpdatequizComponent implements OnInit {

  constructor(private r:ActivatedRoute,private rr:Router,private s:QuizService,private ser:CourseService,) { }
  Id=0
  get:any={
    title:'',
    description:'',
    maxMarks:'',
    numberofQuestions:'',
    active:'false',
    courses:{
      cid:''
    }
  }
  getdata:any=[]
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.qId;
    this.s.getbyid(this.Id).subscribe((data)=>{
      this.get=data;
    })

    this.ser.getcourses().subscribe((data)=>{
      this.getdata=data;
    })
  }


k()
{

  this.s.updateq(this.get).subscribe((data)=>{
    this.rr.navigate(['/admin/quizes']);
    Swal.fire("sucess !!","updated","success");
  },(error)=>{
    Swal.fire("Error !!","not updated",'error');
  })
}
}
