import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LessionsService } from 'src/app/service/lessions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.css']
})
export class AddLessonComponent implements OnInit {
  get={
    lname:'',
   
  }
  constructor(private snak:MatSnackBar,private ser:LessionsService) { }

  ngOnInit(): void {
  }


  formSubmit(){

    if(this.get.lname=='' || this.get.lname.trim()=='')
    {
      this.snak.open("Lession nameis Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else
    {
      this.ser.addlession(this.get).subscribe((data)=>{
    
        Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
        this.get.lname="";
      },
      
     (error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
     })
    }
  }

}
