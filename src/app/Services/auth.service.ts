import { login } from "../Models/login";
import { BehaviorSubject, Observable, map, pipe } from "rxjs";
import { Injectable } from "@angular/core";
import { jwtAuth } from "../Models/jwtAuth";
import { signup } from "../Models/signup";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    signupUrl = "User/Register";
    loginUrl = "User/login";
    private userSubject!: BehaviorSubject<jwtAuth>;
    private user!: Observable<jwtAuth>;

    constructor(private http: HttpClient) {
        let userJson = JSON.parse(localStorage.getItem("user")!);
        this.userSubject = new BehaviorSubject<jwtAuth>(userJson);
        this.user = this.userSubject.asObservable();
    }
    public signUp(user: FormData): Observable<jwtAuth> {
        return this.http.post<jwtAuth>(`${environment.apiURL}/${this.signupUrl}`, user);

    }
    public login(user: login): Observable<jwtAuth> {
        return this.http.post<jwtAuth>(`${environment.apiURL}/${this.loginUrl}`, user)
            .pipe(
                map((res) => {
                    localStorage.setItem("user", JSON.stringify(res));
                    this.userSubject.next(res);
                    return res;
                })
            );
    }

    getCurrentUserInfo() {
        if (this.userSubject == undefined) return null;
        return this.userSubject.value;
    }

    getUserEmail() {
        let userInfo = this.userSubject.value;
        if (userInfo != null) return userInfo.email;
        return "";
    }
    getUserId() {
        let userInfo = this.userSubject.value;
        if (userInfo != null) return userInfo.userId;
        return 0;

    }
}
// import { login } from '../Models/login';
// import { Observable } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { jwtAuth } from '../Models/jwtAuth';
// import { signup } from '../Models/signup';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   signupUrl = 'User/Register';
//   loginUrl = 'User/login';
//   constructor(private http: HttpClient) {}
//   public signUp(signup: FormData): Observable<jwtAuth> {
//     return this.http.post<jwtAuth>(
//       `${environment.apiURL}/${this.signupUrl}`,
//       signup
//     );
//   }
//   public login(user: login): Observable<jwtAuth> {
//     return this.http.post<jwtAuth>(
//       `${environment.apiURL}/${this.loginUrl}`,
//       user
//     );
//   }
// }
