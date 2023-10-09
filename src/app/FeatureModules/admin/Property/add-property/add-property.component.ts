import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddPropertyRequest } from '../models/add-property-request.model';
import { PropertyService } from '../Services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {

  model : AddPropertyRequest;
  selectedImage: any[]=[];

  constructor(private propertyService:PropertyService){
    this.model={
      propertyName:'',
      country:'',
      streetAddress:'',
      streetAddress2:'',
      citySuburbTown:'',
      stateProvienceRegion:'',
      zipPostalCode: '',
      propertyType :'', 
      rentCost:'',
      propertyImage:null,
    };

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


  onImageSelected(event:any){
    if(event.target.files && event.target.files.length>0){
      const file = event.target.files[0];
      this.model.propertyImage = file;
    }
  }


  onFormSubmit(){

    const formData = new FormData();

    formData.set("propertyName",this.model.propertyName);

    formData.set("country",this.model.country);

    formData.set("streetAddress",this.model.streetAddress);

    formData.set("streetAddress2",this.model.streetAddress2);

    formData.set("citySuburbTown",this.model.citySuburbTown);

    formData.set("stateProvienceRegion",this.model.stateProvienceRegion);
    formData.set("zipPostalCode",this.model.zipPostalCode);

    formData.set("propertyType",this.model.propertyType);

    formData.set("rentCost",this.model.rentCost);

    if(this.model.propertyImage){

      formData.append('propertyImage',this.model.propertyImage,this.model.propertyImage.name);

    }
    this.uploadFormData(formData);
  }
  uploadFormData(formData:FormData){

    this.propertyService.addProperty(formData)

    .subscribe({

      next: (response) => {
        console.log("Successful!!!",response);
      },
      error: (error) => {
        console.log("Error occured",error);
      }

    });
 
  }
}
