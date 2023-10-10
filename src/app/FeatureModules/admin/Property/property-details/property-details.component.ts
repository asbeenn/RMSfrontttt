import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../Services/property.service';
import { Property } from '../models/property';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  propertyId: number = 0;
  propertyDetails: Property | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id']; // Assuming 'id' is the route parameter for property details.
      // Initialize propertyDetails as null, or you can use an empty object depending on your use case.
      this.propertyDetails = null;

      // Fetch the property details by propertyId using your service.
      this.propertyService.getPropertyById(this.propertyId).subscribe(
        (property: Property) => {
          this.propertyDetails = property;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
