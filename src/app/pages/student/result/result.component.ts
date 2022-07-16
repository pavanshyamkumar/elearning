import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultService } from 'src/app/service/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private r:ActivatedRoute,private ser:ResultService,private rr:Router) { }
  Id:any;

  results:any={}

  ngOnInit(): void {
    this.Id=this.r.snapshot.params.rId;
    this.ser.getbyid(this.Id).subscribe((data)=>{
      this.results=data;
    })

  }

  home(){
    this.rr.navigate(['/student']);
  }
  

}
