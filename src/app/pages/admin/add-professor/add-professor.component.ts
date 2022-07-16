import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {

  constructor(private snak:MatSnackBar,private ser:UserserviceService) { }
  getdata:any={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    mobilenumber:'',
    qualification:'',
    degree:'',
    college:''
    
  }
  ngOnInit(): void {
  }
  formSubmit(){
    if(this.getdata.username=='' || this.getdata.username.trim()=='')
    {
      this.snak.open("Username is Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    if(this.getdata.password=='' || this.getdata.password.trim()=='')
    {
      this.snak.open("password is Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else{
      this.ser.createdoc(this.getdata).subscribe((data)=>{
        Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
        this.getdata.username=''
        this.getdata.password=''
        this.getdata.firstname=''
        this.getdata.lastname=''
        this.getdata.email=''
        this.getdata.mobilenumber=''
        this.getdata.qualification=''
        this.getdata.degree=''
        this.getdata.college=''
      },
      (error)=>{
        Swal.fire("Opps!!","something went wrong!!",'error')
      })
    }
   
  }
}
