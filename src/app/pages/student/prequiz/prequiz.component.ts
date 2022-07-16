import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { info } from 'console';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prequiz',
  templateUrl: './prequiz.component.html',
  styleUrls: ['./prequiz.component.css']
})
export class PrequizComponent implements OnInit {
  qId:any;
  quiz:any={
  

  }
  constructor(private route:ActivatedRoute,private _quiz:QuizService,private rou:Router) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params.qid;
    this._quiz.getbyid(this.qId).subscribe((data)=>{
      this.quiz=data;
      
    })

  }
  startquiz(){
   Swal.fire({
     title:'Do you want to start the Quiz?',
     
     showCancelButton:true,
     confirmButtonText:`Start`,
     denyButtonText:`Don't Start`,
     icon:'info',
   }).then((result)=>{
     if(result.isConfirmed){
      this.rou.navigate(['/start/'+this.qId])
     } else if(result.isDenied)
     {
       Swal.fire('ccccccc','','info')
     }
   })
  }

}
