import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-view-quizes',
  templateUrl: './admin-view-quizes.component.html',
  styleUrls: ['./admin-view-quizes.component.css']
})
export class AdminViewQuizesComponent implements OnInit {

  constructor(private ser:QuizService) { }
  getdata:any=[]
  ngOnInit(): void {
    this.ser.getquizes().subscribe((data)=>{
      this.getdata=data;
    })
  }

  
  delete(id:any){
    Swal.fire({
      icon:'info',
      title: 'Do you want to Delete?',
      showCancelButton: true,
      confirmButtonText: `Yes`,
    }
    ).then((result) => {
      
      if (result.isConfirmed) {
       
        this.ser.del(id).subscribe((data)=>{
          this.ser.del(id).subscribe((data)=>{
            this.getdata=this.getdata.filter((allUsers:any)=>allUsers.qId!=id)
          Swal.fire("sucess..!!",'Deleted Succesfully','success');
          })
          
        });
      } 
    })

   
  }

}
