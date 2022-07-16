import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfessorService } from 'src/app/service/professor.service';
import Swal from 'sweetalert2';
import { AddProfessorComponent } from '../add-professor/add-professor.component';

@Component({
  selector: 'app-view-professors',
  templateUrl: './view-professors.component.html',
  styleUrls: ['./view-professors.component.css']
})
export class ViewProfessorsComponent implements OnInit {

  
  constructor(private ser:ProfessorService,private dia:MatDialog) { }
  getdata:any=[]
  ngOnInit(): void {
    this.ser.getprofecessors().subscribe((data)=>{
      this.getdata=data
    },
    (error)=>{
      console.log("errror");

    })
  }

  open()
  {
    this.dia.open(AddProfessorComponent);
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
          this.getdata=this.getdata.filter((allUsers:any)=>allUsers.proid!=id)
          Swal.fire("sucess..!!",'Deleted Succesfully','success');
        });
      } 
    })

   
  }

}
