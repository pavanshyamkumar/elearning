import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecourse',
  templateUrl: './updatecourse.component.html',
  styleUrls: ['./updatecourse.component.css']
})
export class UpdatecourseComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:CourseService,private rr:Router) { }
  Id=0;
  getdata:any={};
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.cid;
    this.ser.getbyid(this.Id).subscribe((data)=>{

      this.getdata=data;

    })


  }

  formSubmit(){

    this.ser.update(this.getdata).subscribe((data)=>{
      this.rr.navigate(['/admin/view-courses']);
      Swal.fire("sucess !!","updated","success");
    },
    (error)=>{
      Swal.fire("Error !!","not updated",'error');
    }
    )

  }

}
