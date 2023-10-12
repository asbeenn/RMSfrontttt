import { Component, OnInit, inject } from '@angular/core';
import { login } from 'src/app/Models/login';
import { signup } from 'src/app/Models/signup';
import { jwtAuth } from 'src/app/Models/jwtAuth';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  model: signup;
  selectedImage: any[] = [];
  router = inject(Router);
  error = '';

  submitted = false;
  uForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
    this.uForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      //photoUrl: ['', Validators.required],
      iDUrl: ['', Validators.required],
      country: ['', Validators.required],
      streetAddress1: ['', Validators.required],
      streetAddress2: [''],
      citysuburbtown: ['', Validators.required],
      zipCode: [''],
      roleName: ['', Validators.required]
    })
  }

  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.model.photoUrl = file;
    }
  }

  signup() {

    debugger;
    this.submitted = true;
    if (this.uForm.invalid) return;

    const formData = new FormData();

    formData.set('firstName', this.uForm.controls['firstName'].value);
    formData.set('middleName', this.uForm.controls['middleName'].value);
    formData.set('lastName', this.uForm.controls['lastName'].value);
    formData.set('email', this.uForm.controls['email'].value);
    formData.set('password', this.uForm.controls['password'].value);
    formData.set('iDUrl', this.uForm.controls['iDUrl'].value);
    formData.set('country', this.uForm.controls['country'].value);
    formData.set('streetAddress1', this.uForm.controls['streetAddress1'].value);
    formData.set('streetAddress2', this.uForm.controls['streetAddress2'].value);
    formData.set('citySuburbTown', this.uForm.controls['citysuburbtown'].value);

    formData.set('roleName', this.uForm.controls['roleName'].value);
    formData.set('zipCode', this.uForm.controls['zipCode'].value);

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
          this.router.navigate(['/login']);
        },
        error: (e) => {
          this.error = e;
          console.log('Error occured', e);
        },
      });
  }
}
