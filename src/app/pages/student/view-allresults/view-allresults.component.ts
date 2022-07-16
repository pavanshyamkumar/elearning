import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-view-allresults',
  templateUrl: './view-allresults.component.html',
  styleUrls: ['./view-allresults.component.css']
})
export class ViewAllresultsComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:ResultService, private login:LoginserviceService) { }
  Id:any;
  results:any=[

  ]
  ngOnInit(): void {
    this.Id=this.r.snapshot.params.qId;
    this.ser.getresults(this.Id,this.login.getuser().id).subscribe((data)=>{
      this.results=data;
    })
  }

}
