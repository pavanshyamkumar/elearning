import { LoginserviceService } from "./loginservice.service";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private login:LoginserviceService)
    {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add the jwt tocken local storage
 
         let authReq=req;
         const token=this.login.gettoken();
     
         if(token != null)
         {   
             authReq=authReq.clone({setHeaders:{ Authorization :`Bearer ${token}`},});
 
         }
         return next.handle(authReq);
     }
}

export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,
    },
];