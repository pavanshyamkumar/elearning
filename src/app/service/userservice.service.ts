import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './baseurl';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

public createdoc(getdata:any)
{
  return this.http.post(`${baseurl}/user/createuserpro`,getdata);
}

public createpat(getdata:any){
  return this.http.post(`${baseurl}/user/createuserstu`,getdata);
}

  public createuser(getdata:any)
  {
    return this.http.post(`${baseurl}/user/createuserstu`,getdata);
  }

  public allusers()
  {
    return this.http.get(`${baseurl}/user/showall`);
  }

  public deleteuser(id:any){
    return this.http.delete(`${baseurl}/user/delete/${id}`);
  }

  public getdata(id:any){
    return this.http.get(`${baseurl}/user/${id}`);

  }

  public update(updatedata:any)
  {
    return this.http.put(`${baseurl}/user/update`,updatedata);
  }
}
