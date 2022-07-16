import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getstudents()
  {
    return this.http.get(`${baseurl}/student/`);
  }
}
