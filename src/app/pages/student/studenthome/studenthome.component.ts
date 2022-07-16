import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private ser:CourseService) { }
  getdata:any=[

  ]
  ter:any;
  ngOnInit(): void {

    this.ser.getcourses().subscribe((data)=>{
      this.getdata=data;
    },
    (error)=>{
      console.log(error);
    })
    
  }


}
