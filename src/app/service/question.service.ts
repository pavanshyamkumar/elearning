import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }
  public getquestions(quesid:any)
  {
    return this.http.get(`${baseurl}/question/quiz/all/${quesid}`)
  }
  public getquestionsoftest(quesid:any)
  {
    return this.http.get(`${baseurl}/question/quiz/${quesid}`)
  }
  public addquestion(question:any)
  {
    return this.http.post(`${baseurl}/question/`,question);
  }
  public delete(queId:any)
  {
    return this.http.delete(`${baseurl}/question/${queId}`);
  }
  public getbyid(quesid:any)
  {
    return this.http.get(`${baseurl}/question/${quesid}`);
  }

  //eval quiz

  public evalquiz(questions:any)
  {
    return this.http.post(`${baseurl}/question/eval-quiz`,questions);
  }

  public updatequestion(getdata:any)
  {
    return this.http.put(`${baseurl}/question/`,getdata);
  }


}
