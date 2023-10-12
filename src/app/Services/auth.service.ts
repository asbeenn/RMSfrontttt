import { login } from '../Models/login';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { jwtAuth } from '../Models/jwtAuth';
import { signup } from '../Models/signup';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    signupUrl = 'User/Register';
    loginUrl = 'User/login';
    private userSubject: BehaviorSubject<jwtAuth>;
    private user: Observable<jwtAuth | null>;

    constructor(private http: HttpClient, private router: Router) {

        let hasUserData:boolean = false;
        let userJSONString = localStorage.getItem("user");
        this.userSubject = new BehaviorSubject<jwtAuth>(new jwtAuth());
        
        if (userJSONString != undefined) {
            
            if(userJSONString.length > 0){
                let userJson = JSON.parse(userJSONString);
                this.userSubject = new BehaviorSubject<jwtAuth>(userJson);
            }                
        }
        
        this.user = this.userSubject.asObservable();
    }
    public signUp(signup: FormData): Observable<jwtAuth> {
        return this.http.post<jwtAuth>(
            `${environment.apiURL}/${this.signupUrl}`,
            signup
        );
    }
    public login(user: login): Observable<jwtAuth> {
        return this.http.post<jwtAuth>(
            `${environment.apiURL}/${this.loginUrl}`,
            user
        )
            .pipe(
                map((user: jwtAuth) => {
                    localStorage.setItem("user", JSON.stringify(user));
                    this.userSubject.next(user);
                    return user;
                })
            );
    }

    getCurrentUserInfo() {
        return this.userSubject.value;
    }
    public logoff() {
        localStorage.setItem("user", "");
        this.userSubject.next(new jwtAuth());
        this.router.navigate(['/']);
    }
}
