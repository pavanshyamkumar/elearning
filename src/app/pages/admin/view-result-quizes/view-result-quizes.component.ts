import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-view-result-quizes',
  templateUrl: './view-result-quizes.component.html',
  styleUrls: ['./view-result-quizes.component.css']
})
export class ViewResultQuizesComponent implements OnInit {
 
  constructor(private ser:CourseService,private r:ActivatedRoute,private ser_r:ResultService,private ss:QuizService) { }
  getdata:any=[

  ]
  stuId=0;
  q:any={
    val:''
  }
  getresults:any=[]
  ngOnInit(): void {
    this.stuId=this.r.snapshot.params.stuid

    this.ss.getquizes().subscribe((data)=>{
      this.getdata=data;
    },
    (error)=>{
      console.log(error);
    })
  }
  selected=0
  search()
  {
  
    this.ser_r.getresults(this.selected,this.stuId).subscribe((data)=>{
      this.getresults=data;
    })

  }

}
