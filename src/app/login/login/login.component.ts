import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  k:boolean=false;
  constructor(private loginsnack:MatSnackBar, private service:LoginserviceService, private r:Router) { 
  }
  hide = true;
  logindata={
    username:'',
    password:''
  };

  ngOnInit(): void {
  }

  formSubmit(){
      
    if((this.logindata.username.trim()=='' || this.logindata.username=='') && (this.logindata.password.trim()=='' || this.logindata.password=='')){
      this.loginsnack.open("Below Fields are Mandatory","ok",{duration: 3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else if(this.logindata.username.trim()=='' || this.logindata.username==''){
        this.loginsnack.open("Username is Mandatory","ok",{duration:3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else if(this.logindata.password.trim()=='' || this.logindata.password==''){
      this.loginsnack.open("Password is Mandatory","ok",{duration: 3000, verticalPosition: 'top', horizontalPosition:'center'})
    }
    else{
      this.k=true;
      this.service.generate(this.logindata).subscribe((data:any)=>{
        this.service.loginuser(data.token);
        this.service.currentuser().subscribe((user)=>{
          this.service.setuser(user);
          if(this.service.getrole()=="STUDENT"){
            this.r.navigate(['student'])
          }
          if(this.service.getrole()=='ADMIN'){
            this.r.navigate(['admin'])
          }
          if(this.service.getrole()=='PROFESSOR'){
            this.r.navigate(['professor'])
          }
        
        })
      },
      (error)=>{
        this.k=false;
        this.loginsnack.open("Inavlid Cridentials","ok",{duration:3000,verticalPosition:"top",horizontalPosition:"center"})
      }
      )
    }


      

  }

}
