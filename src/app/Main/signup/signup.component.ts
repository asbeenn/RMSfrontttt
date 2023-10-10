import { Component, OnInit, inject } from '@angular/core';
import { login } from 'src/app/Models/login';
import { signup } from 'src/app/Models/signup';
import { jwtAuth } from 'src/app/Models/jwtAuth';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
// export class SignupComponent {
//   signupDto = new signup();
//   router = inject(Router);
//   jwtDto = new jwtAuth();

//   constructor(private authService: AuthService) {}

//   onImageSelected(event: any) {
//     if (event.target.files && event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.signupDto.photoUrl = file;
//     }
//   }
//   signup() {
//     console.log(this.signupDto);
//     this.authService.signUp(this.signupDto).subscribe(() => {
//       // After successful signup, navigate to the login component.
//       this.router.navigate(['/login']); // Replace 'login' with the actual route path for your login component.
//     });
//   }
// }
export class SignupComponent {
  model: signup;
  selectedImage: any[] = [];

  constructor(private authService: AuthService) {
    this.model = {
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      password: '',
      photoUrl: null,
      iDUrl: '',
      country: '',
      streetAddress1: '',
      streetAddress2: '',
      citySuburbTown: '',
      zipCode: '',
      roleName: '',
    };
  }
  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.model.photoUrl = file;
    }
  }

  signup() {
    const formData = new FormData();

    formData.set('firstName', this.model.firstName);

    formData.set('middleName', this.model.middleName);

    formData.set('lastName', this.model.lastName);

    formData.set('email', this.model.email);

    formData.set('password', this.model.password);

    formData.set('iDUrl', this.model.iDUrl);

    formData.set('country', this.model.country);

    formData.set('streetAddress1', this.model.streetAddress1);
    formData.set('streetAddress2', this.model.streetAddress2);
    formData.set('citySuburbTown', this.model.citySuburbTown);

    formData.set('roleName', this.model.roleName);

    formData.set('zipCode', this.model.zipCode);

    if (this.model.photoUrl) {
      formData.append(
        'photoUrl',
        this.model.photoUrl,
        this.model.photoUrl.name
      );
    }
    this.uploadFormData(formData);
  }
  uploadFormData(formData: FormData) {
    this.authService
      .signUp(formData)

      .subscribe({
        next: (response) => {
          console.log('Successful!!!', response);
        },
        error: (error) => {
          console.log('Error occured', error);
        },
      });
  }
}
