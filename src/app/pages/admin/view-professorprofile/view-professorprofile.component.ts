import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessorService } from 'src/app/service/professor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-professorprofile',
  templateUrl: './view-professorprofile.component.html',
  styleUrls: ['./view-professorprofile.component.css']
})
export class ViewProfessorprofileComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:ProfessorService) { }

  proId=0;
  updatedata:any={
    
    
    
  }
  getdata:any={
    name:''
  }

  f:boolean=true

  ngOnInit(): void {
    this.proId=this.r.snapshot.params.proid
    this.ser.getbyone(this.proId).subscribe((data)=>{
      this.getdata=data;
      this.updatedata=data
      console.log(data);
    })
    
  }
  change()
  {
    this.f=false;
  }
  same()
  {
    this.f=true;
  }
  formSubmit(){
    this.ser.updatepro(this.updatedata).subscribe((data)=>{
      Swal.fire("Sucess!!","updated sucessfully",'success')
    },(error)=>{
      Swal.fire("opps!!","something went wrong",'error');
    })
  }

}
