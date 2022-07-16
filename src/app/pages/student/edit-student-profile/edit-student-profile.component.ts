import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { UserserviceService } from 'src/app/service/userservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.css']
})
export class EditStudentProfileComponent implements OnInit {

  constructor(private lo:LoginserviceService, private ser:UserserviceService,private r:Router) { }
  getdata:any={
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    mobilenumber:''

  }

  updatedata:any={
    id:'',
   firstname:'',
    lastname:'',
    email:'',
    mobilenumber:''
  }
  ngOnInit(): void {
    this.lo.currentuser().subscribe((data)=>{
      this.getdata=data;
      this.updatedata.firstname=this.getdata.firstname;
      this.updatedata.lastname=this.getdata.lastname;
      this.updatedata.email=this.getdata.email;
      this.updatedata.mobilenumber=this.getdata.mobilenumber;
      this.updatedata.id=this.getdata.id;
    },
    (error)=>{
      console.log("error");
    })
  }
  formSubmit()
  {
    this.ser.update(this.updatedata).subscribe((data)=>{
      this.r.navigate(['/student']);
      Swal.fire("sucess !!","updated","success");
    },
    (error)=>{
      Swal.fire("Error !!","not updated",'error');
    })
  }

}
