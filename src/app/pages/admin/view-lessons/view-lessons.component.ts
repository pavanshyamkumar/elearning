import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/service/content.service';
import { LessionsService } from 'src/app/service/lessions.service';
import Swal from 'sweetalert2';
import { AddLessonComponent } from '../add-lesson/add-lesson.component';

@Component({
  selector: 'app-view-lessons',
  templateUrl: './view-lessons.component.html',
  styleUrls: ['./view-lessons.component.css']
})
export class ViewLessonsComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  get:any={
    lname:'',
    courses:{
     
    }
  }
  constructor(private r:ActivatedRoute,
    private router:Router,private con:ContentService,private ser:LessionsService,private dia:MatDialog,private snak:MatSnackBar) { }
  Id=0;
  getdata:any=[]

  addcontent:any={
    name:'',
    downloadlink:'',
    videolink:'',
    lessons:null
  }

  ngOnInit(): void {
    this.Id=this.r.snapshot.params.cid;
    this.get.courses['cid']=this.Id
    this.ser.getbycourse(this.Id).subscribe((data)=>{
      this.getdata=data;
      console.log(data)
    })
  }

  f:boolean=true
  c:boolean=true;
  cont:boolean=true;
  condataaa:boolean=true;
  change()
  {
    this.f=false;
    this.c=true;
    this.d=true;
    this.cont=true;
    this.condataaa=true;
  }
  same(){this.f=true;this.d=true;this.c=true,this.cont=true}

  contentchange()
  {
    this.c=false;
    this.f=true;
    this.d=true;
    this.cont=true;
    this.condataaa=true;
  }
  contentch()
  {
    this.cont=false;
    this.f=true;
    this.d=true;
    this.c=true;
    this.condataaa=true;

  }
  changedatatwo()
  {
    this.condataaa=false;
    this.f=true;
    this.d=true;
    this.c=true;
    this.cont=true;
  }
  
  formSubmit(){

    if(this.get.lname=='' || this.get.lname.trim()=='')
    {
      this.snak.open("Lession nameis Requires","ok",{duration:3000,verticalPosition:'top',horizontalPosition:'center'})
    }
    else
    {
      this.ser.addlession(this.get).subscribe((data)=>{
    
        Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
        this.get.lname="";
        this.reloadCurrentRoute();
       
      },
      
     (error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
     })
    }
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/admin', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

//sera
term:any;
//get data for to edit using id
dataa:any={}
d:boolean=true;
edit(lid:any)
{
    this.ser.getbyid(lid).subscribe((data)=>{
      this.dataa=data;
      this.d=false
      this.f=true;
      this.c=true;
    },
    (error)=>{
      Swal.fire("Opps!!","something went wrong!!",'error')
      this.d=true
    })
}

//edit lession
editSubmit(){
  this.ser.edit(this.dataa).subscribe(data=>{
    Swal.fire("sucess !!","updated","success");
    this.reloadCurrentRoute();
  },
  (error)=>{
    Swal.fire("Error !!","not updated",'error');
  })
}

//delete lession by id
dell(lid:any)
{
  Swal.fire({
    icon:'info',
    title: 'Do you want to Delete?',
    showCancelButton: true,
    confirmButtonText: `Yes`,
  }
  ).then((result) => {
    
    if (result.isConfirmed) {
      this.ser.del(lid).subscribe((data)=>{
     
        Swal.fire("sucess..!!",'Deleted Succesfully','success');
        this.reloadCurrentRoute()
      });
    } 
  })
}

//addcontnet
addcontentt(){
  this.con.addcontent(this.addcontent).subscribe((data)=>{
    Swal.fire("Sucesss !!","sucessfully added refresh it!! ",'success');
    this.reloadCurrentRoute()
  })
}

//view-content
content:any=[]
contentview(lid:any)
{
    this.con.view(lid).subscribe((data)=>{
      this.content=data
      console.log(data)
    })
}

//delete content
deletecontent(conid:any)
{
  Swal.fire({
    icon:'info',
    title: 'Do you want to Delete?',
    showCancelButton: true,
    confirmButtonText: `Yes`,
  }
  ).then((result) => {
    
    if (result.isConfirmed) {
      this.con.del(conid).subscribe((data)=>{
     
        Swal.fire("sucess..!!",'Deleted Succesfully','success');
        this.reloadCurrentRoute()
      });
    } 
  })
}

//edit content
condataa:any={
  name:'',
  downloadlink:'',
  videolink:'',
  
}


//getconntentbyid

getcontentbyid(conid:any)
{
  this.con.getbyid(conid).subscribe((data)=>{
    this.condataa=data;
  })
}

editcontentt()
{
 
  this.con.updateaa(this.condataa).subscribe((data)=>{
    Swal.fire("sucess !!","updated","success");

    this.reloadCurrentRoute();
  })
}
}
