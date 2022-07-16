import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getquizes()
  {
    return this.http.get(`${baseurl}/quiz/`)
  }
  public savequiz(get:any)
  {
    return this.http.post(`${baseurl}/quiz/`,get);
  }
  public getbyid(Id:any)
  {
    return this.http.get(`${baseurl}/quiz/${Id}`);
  }

  public updateq(data:any)
  {
   
    return this.http.put(`${baseurl}/quiz/`,data);


  }
  public del(Id:any)
  {
    return this.http.delete(`${baseurl}/quiz/${Id}`);
  }
  public getquizesbycourse(Id:any)
  {
    return this.http.get(`${baseurl}/quiz/courses/${Id}`);
  }
}
