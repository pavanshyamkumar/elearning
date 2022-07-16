import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  public getcourses()
  {
    return this.http.get(`${baseurl}/courses/all`);
  }

  public addcourse(get:any)
  {
    return this.http.post(`${baseurl}/courses/save`,get);
  }

  public getbyid(cid:any)
  {
    return this.http.get(`${baseurl}/courses/${cid}`)
  }

  public update(getdata:any)
  {
    return this.http.put(`${baseurl}/courses/update`,getdata);
  }

  public del(cid:any)
  {
    return this.http.delete(`${baseurl}/courses/${cid}`);
  }

  
}
