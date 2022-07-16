import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http:HttpClient) { }

  public getattempts(qId:any,sId:any)
  {
    return this.http.get(`${baseurl}/results/attempts/${qId}/${sId}`);
  }

  public getresults(qId:any,sId:any)
  {
    return this.http.get(`${baseurl}/results/${qId}/${sId}`);
  }

  public getbyid(rId:any)
  {
    return this.http.get(`${baseurl}/results/${rId}`)
  }
}
