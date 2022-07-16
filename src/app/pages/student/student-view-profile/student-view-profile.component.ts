import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-student-view-profile',
  templateUrl: './student-view-profile.component.html',
  styleUrls: ['./student-view-profile.component.css']
})
export class StudentViewProfileComponent implements OnInit {

  constructor(private ser:LoginserviceService) { }
  get:any={
    authorities:[{
      authority:''}
    ]
  }
  ngOnInit(): void {
    this.ser.currentuser().subscribe((data)=>{
      this.get=data;
    })
  }

}
