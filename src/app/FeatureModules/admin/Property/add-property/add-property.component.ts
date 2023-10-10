import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPropertyRequest } from '../models/add-property-request.model';
import { PropertyService } from '../Services/property.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  model: AddPropertyRequest;
  selectedImage: any[] = [];
  userId: number = 0;
  propertyId: string = "";

  constructor(private propertyService: PropertyService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) {
    this.userId = this.authService.getUserId();

    this.model = {
      propertyName: '',
      country: '',
      streetAddress: '',
      streetAddress2: '',
      citySuburbTown: '',
      stateProvienceRegion: '',
      zipPostalCode: '',
      propertyType: '',
      rentCost: '',
      propertyImage: null,
    };

  }
  ngOnInit(): void {
    let _propertyId = this.activatedRoute.snapshot.params["id"];
    if (_propertyId != undefined) {
      this.propertyId = _propertyId;
      console.log("_propertyId:", _propertyId);

      this.propertyService.getPropertyById(parseInt(this.propertyId))
        .subscribe({
          next: (res) => {
            this.model.propertyName = res.propertyName;
            this.model.country = res.country;
            this.model.streetAddress = res.streetAddress;
            this.model.streetAddress2 = res.streetAddress2;
            this.model.citySuburbTown = res.citySuburbTown;
            this.model.stateProvienceRegion = res.stateProvienceRegion;
            this.model.zipPostalCode = res.zipPostalCode;
            this.model.propertyType = res.propertyType;
            this.model.rentCost = res.rentCost;
            this.userId = this.authService.getUserId();

          },
          error: (error) => {
            console.log("Error", error);
          }
        })
    }

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
    const formData = new FormData();
    formData.set("propertyName", this.model.propertyName);
    formData.set("country", this.model.country);
    formData.set("streetAddress", this.model.streetAddress);
    formData.set("streetAddress2", this.model.streetAddress2);
    formData.set("citySuburbTown", this.model.citySuburbTown);
    formData.set("stateProvienceRegion", this.model.stateProvienceRegion);
    formData.set("zipPostalCode", this.model.zipPostalCode);
    formData.set("propertyType", this.model.propertyType);
    formData.set("rentCost", this.model.rentCost);
    formData.set("UserId", this.userId.toString());
debugger;
    //if new property
    if (this.propertyId == "") {
      if (this.model.propertyImage) {
        formData.append('propertyImage', this.model.propertyImage, this.model.propertyImage.name);
      }
      this.uploadFormData(formData);
    }
    // else update property
    else{
      formData.set("propertyId", this.propertyId);
      this.propertyService.updateProperty(formData)
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
