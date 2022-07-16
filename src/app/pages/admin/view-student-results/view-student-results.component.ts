import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-view-student-results',
  templateUrl: './view-student-results.component.html',
  styleUrls: ['./view-student-results.component.css']
})
export class ViewStudentResultsComponent implements OnInit {

  constructor(private ser:StudentService) { }
  getdata:any=[]
  ngOnInit(): void {
    this.ser.getstudents().subscribe((data)=>{
      this.getdata=data
    },
    (error)=>{
      console.log("errror");

    })
  }

}
