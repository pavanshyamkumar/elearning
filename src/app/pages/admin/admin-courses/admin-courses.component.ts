import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {

  constructor(private ser:CourseService, private dia:MatDialog) { }
  getdata:any=[

  ]
  ngOnInit(): void {

    this.ser.getcourses().subscribe((data)=>{
      this.getdata=data;
    },
    (error)=>{
      console.log(error);
    })
    
  }

  open()
  {
    this.dia.open(AddCourseComponent);
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
            this.getdata=this.getdata.filter((allUsers:any)=>allUsers.cid!=id)
          Swal.fire("sucess..!!",'Deleted Succesfully','success');
          })
          
        });
      } 
    })

   
  }

}
