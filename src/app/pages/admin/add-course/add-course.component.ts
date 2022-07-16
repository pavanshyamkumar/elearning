import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { ProfessorService } from 'src/app/service/professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  get={
    cname:'',
    description:'',
    professors:null
  }
  constructor(private snak:MatSnackBar,private r:Router,private ser:CourseService,private serr:ProfessorService) { }
  getdata:any=[]
  ngOnInit(): void {
    this.serr.getprofecessors().subscribe((data)=>{
      this.getdata=data
    },
    (error)=>{
      console.log("errror");

    })
  }

  formSubmit(){

    if(this.get.cname=='' || this.get.cname.trim()=='')
    {
      this.snak.open("Coursename is Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    if(this.get.description=='' || this.get.description.trim()=='')
    {
      this.snak.open("description is Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else
   {
   
     this.ser.addcourse(this.get).subscribe((data)=>{
      
       Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
     this.r.navigate(['/admin/view-courses'])

     },
     (error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
     })
   }



  }

}
