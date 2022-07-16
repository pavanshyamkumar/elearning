import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-showquizes',
  templateUrl: './showquizes.component.html',
  styleUrls: ['./showquizes.component.css']
})
export class ShowquizesComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:QuizService) { }
  Id:any;
  cname:any;
  quizes:any=[

  ]
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.cid;
    this.cname=this.r.snapshot.params.cname;
    this.ser.getquizesbycourse(this.Id).subscribe((data)=>{
      this.quizes=data;
    })


    
  }

}
