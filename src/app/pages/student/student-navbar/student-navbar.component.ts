import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.css']
})
export class StudentNavbarComponent implements OnInit {

  constructor(public login:LoginserviceService,private r:Router) { }
  getdata:any={
    username:''
 }
  ngOnInit(): void {
    this.getdata=this.login.currentuser().subscribe((data)=>{
      this.getdata=data;
      console.log(data);
    },
    (error)=>{
      console.log("error");
    });
  }
  logout()
  {
    this.login.islogout()
    this.r.navigate(['login']);

  }

}
