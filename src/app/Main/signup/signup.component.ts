import { Component, OnInit, inject } from '@angular/core';
import { login } from 'src/app/Models/login';
import { signup } from 'src/app/Models/signup';
import { jwtAuth } from 'src/app/Models/jwtAuth';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signupDto = new signup();
  router = inject(Router);
  jwtDto = new jwtAuth();

  constructor(private authService: AuthService) {}

  signup() {
    console.log(this.signupDto);
    this.authService.signUp(this.signupDto).subscribe(() => {
      // After successful signup, navigate to the login component.
      this.router.navigate(['/login']); // Replace 'login' with the actual route path for your login component.
    });
  }
}
