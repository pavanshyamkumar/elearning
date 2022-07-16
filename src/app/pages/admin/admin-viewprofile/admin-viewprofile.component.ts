import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-admin-viewprofile',
  templateUrl: './admin-viewprofile.component.html',
  styleUrls: ['./admin-viewprofile.component.css']
})
export class AdminViewprofileComponent implements OnInit {

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
