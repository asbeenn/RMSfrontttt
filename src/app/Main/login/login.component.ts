import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { login } from 'src/app/Models/login';
import { signup } from 'src/app/Models/signup';
import { jwtAuth } from 'src/app/Models/jwtAuth';
import { AuthService } from 'src/app/Services/auth.service';
//import * as jwt_decode from 'jsonwebtoken';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginDto = new login();
  router = inject(Router);

  jwtDto = new jwtAuth();

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    
  }
  logins() {
    if (this.loginForm.valid) {
      const loginDto = this.loginForm.value;
      this.authService.login(loginDto).subscribe((jwtDto) => {
        localStorage.setItem('jwtToken', jwtDto.token);

        const helper = new JwtHelperService();

        const token = localStorage.getItem('jwtToken');

        const decodedToken = helper.decodeToken(token!) as UserPayLoad;
        // const decodedToken = helper.decodeToken(token!);
        //const decodedToken = jwt_decode.decode(jwtDto.token);
        console.log(decodedToken);
        // const userRole = decodedToken.role

        if (
          decodedToken[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ] === 'Admin'
        ) {
          this.router.navigate(['/admin']);
        } else if (
          decodedToken[
            'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          ] === 'Tenant'
        ) {
          this.router.navigate(['/signup']);
        } else {
          this.router.navigate(['/signup']);
        }
      });
    }
  }
}
type UserPayLoad = {
  FirstName: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;

  LastName: string;
  MiddleName: string;
  UserId: string;
  aud: string;
  email: string;
};
