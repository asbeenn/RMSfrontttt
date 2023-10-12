import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AddPropertyRequest } from '../models/add-property-request.model';
import { PropertyService } from '../Services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  model: AddPropertyRequest;
  selectedImage: any[] = [];

  pForm!: FormGroup;
  submitted: boolean = false;

  constructor(private propertyService: PropertyService, private formBuilder: FormBuilder) {


    this.model = {
      //   propertyName: '',
      //   country: '',
      //   streetAddress: '',
      //   streetAddress2: '',
      //   citySuburbTown: '',
      //   stateProvienceRegion: '',
      //   zipPostalCode: '',
      //   propertyType: '',
      //   rentCost: '',
      propertyImage: null
    };

  }

  ngOnInit() {
    this.pForm = this.formBuilder.group({
      propertyName: ['', Validators.required],
      country: ['', Validators.required],
      streetAddress: ['', Validators.required],
      streetAddress2: [''],
      citySuburbTown: ['', Validators.required],
      stateProvienceRegion: ['', Validators.required],
      zipPostalCode: ['', Validators.required],
      propertyType: ['', Validators.required],
      rentCost: ['', Validators.required]
    });
  }

  // onImageSelected(event: any) {
  //   const file = event.target.files[0]; // Get the selected file
  //   if (file) {
  //     this.model.propertyImage = file;
  //     // Read the selected file as a data URL and assign it to selectedImage
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.selectedImage = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }


  onImageSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.model.propertyImage = file;
    }
  }


  onFormSubmit() {

    this.submitted = true;
    if (this.pForm.invalid) return;

    const formData = new FormData();

    formData.set("propertyName", this.pForm.controls['propertyName'].value);
    formData.set("country", this.pForm.controls['country'].value);
    formData.set("streetAddress", this.pForm.controls['streetAddress'].value);
    formData.set("streetAddress2", this.pForm.controls['streetAddress2'].value);
    formData.set("citySuburbTown", this.pForm.controls['citySuburbTown'].value);
    formData.set("stateProvienceRegion", this.pForm.controls['stateProvienceRegion'].value);
    formData.set("zipPostalCode", this.pForm.controls['zipPostalCode'].value);
    formData.set("propertyType", this.pForm.controls['propertyType'].value);
    formData.set("rentCost", this.pForm.controls['rentCost'].value);

    alert(this.pForm.controls['propertyName'].value);
    debugger;

    if (this.model.propertyImage) {
      formData.append('propertyImage', this.model.propertyImage, this.model.propertyImage.name);
    }
    this.uploadFormData(formData);
  }
  uploadFormData(formData: FormData) {

    this.propertyService.addProperty(formData)

      .subscribe({

        next: (response) => {
          console.log("Successful!!!", response);
        },
        error: (error) => {
          console.log("Error occured", error);
        }

      });

  }
}
