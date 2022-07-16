import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public login:LoginserviceService,private r:Router) { }

  ngOnInit(): void {
  }
  logout()
  {
    this.login.islogout()
    this.r.navigate(['login']);

  }


}
