import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-questions',
  templateUrl: './admin-view-questions.component.html',
  styleUrls: ['./admin-view-questions.component.css']
})
export class AdminViewQuestionsComponent implements OnInit {
qId:any;
qtitle:any;
  constructor(private route:ActivatedRoute,private ser:QuestionService) { }
questions:any=[];
  ngOnInit(): void {
    this.qId=this.route.snapshot.params.qId;
    this.qtitle=this.route.snapshot.params.title

    this.ser.getquestions(this.qId).subscribe((data)=>{
      this.questions=data;
    
    })
  
  }
  del(id:any){
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
       
      
          this.ser.delete(id).subscribe((data)=>{
            this.questions=this.questions.filter((allUsers:any)=>allUsers.quesId!=id)
          Swal.fire("sucess..!!",'Deleted Succesfully','success');
          })
          
      
      } 
    })

   
  }

}
