import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class LessionsService {

  constructor(private http:HttpClient) { }

  public getbycourse(cid:any)
  {
    return this.http.get(`${baseurl}/lessions/courses/${cid}`);
  }

  public addlession(get:any)
  {
    return this.http.post(`${baseurl}/lessions/save`,get);
  }

  public getbyid(lid:any)
  {
    return this.http.get(`${baseurl}/lessions/${lid}`);
  }

  public edit(data:any)
  {
    return this.http.put(`${baseurl}/lessions/`,data);
  }

  public del(lid:any)
  {
    return this.http.delete(`${baseurl}/lessions/${lid}`);
  }

  
}
