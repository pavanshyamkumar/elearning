import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http:HttpClient) { }

  public getprofecessors()
  {
    return this.http.get(`${baseurl}/professor/`);
  }

  public getbyone(proid:any)
  {
    return this.http.get(`${baseurl}/professor/${proid}`);
  }

  public updatepro(updatedata:any)
  {
    return this.http.put(`${baseurl}/professor/`,updatedata);
  }

  public del(proid:any)
  {
    return this.http.delete(`${baseurl}/professor/${proid}`);
  }
}
