import { login } from "../Models/login";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { jwtAuth } from "../Models/jwtAuth";
import { signup } from "../Models/signup";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn:'root'
})
export class AuthService{

    signupUrl="User/Register"
    loginUrl ="User/login"
    constructor(private http:HttpClient){
    }
    public signUp(user:signup):Observable<jwtAuth>{
        return this.http.post <jwtAuth>(`${environment.apiURL}/${this.signupUrl}`,user);
    }
    public login(user:login):Observable<jwtAuth>{
        return this.http.post <jwtAuth>(`${environment.apiURL}/${this.loginUrl}`,user);
    }
}