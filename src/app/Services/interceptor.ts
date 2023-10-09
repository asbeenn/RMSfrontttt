import { HttpEvent } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token =localStorage.getItem('jwtToken');
       if(token){
        req =req.clone({
            setHeaders:{Authorization:`Bearer ${token}`}
        });
       }
       
       return next.handle(req);
    }
}