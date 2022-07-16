import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { QuizService } from 'src/app/service/quiz.service';
import { ResultService } from 'src/app/service/result.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-quizes',
  templateUrl: './view-all-quizes.component.html',
  styleUrls: ['./view-all-quizes.component.css']
})
export class ViewAllQuizesComponent implements OnInit {

  constructor(private ser:QuizService, private r_ser:ResultService,
    private login:LoginserviceService,private router:Router,) { }
  attempts:any={
    k:''
  };
  quizes:any=[]
  ngOnInit(): void {
    this.ser.getquizes().subscribe((data)=>{
      this.quizes=data;
    })
  }

  openins(qId:any)
  {
      //get attempts count
  this.r_ser.getattempts(qId, this.login.getuser().id).subscribe((data)=>{
    this.attempts=data;

    if(this.attempts.k>=3)
    {
      Swal.fire('No Attempts Left','You can not attempt this quiz','error')
    }
  else
  {
    this.router.navigate(['/instructions/'+qId])
  }
    

  })
  }

}
