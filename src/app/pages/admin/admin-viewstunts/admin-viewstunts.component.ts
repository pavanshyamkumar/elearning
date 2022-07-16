import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-admin-viewstunts',
  templateUrl: './admin-viewstunts.component.html',
  styleUrls: ['./admin-viewstunts.component.css']
})
export class AdminViewstuntsComponent implements OnInit {

  constructor(private ser:StudentService) { }
  getdata:any=[]
  ngOnInit(): void {
    this.ser.getstudents().subscribe((d)=>{
      this.getdata=d;
    })
  }

}
