import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http:HttpClient) { }

  public addcontent(get:any)
  {
    return this.http.post(`${baseurl}/content/save`,get);
  }

  public view(lid:any)
  {
    return this.http.get(`${baseurl}/content/lessions/${lid}`)
  }

  public del(conid:any)
  {
    return this.http.delete(`${baseurl}/content/${conid}`);
  }

  public getbyid(conid:any)
  {
    return this.http.get(`${baseurl}/content/${conid}`)
  }

  public updateaa(condataa:any)
  {
    return this.http.put(`${baseurl}/content/update`,condataa);
  }
}
