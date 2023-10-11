import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { propertyByUser } from '../../admin/Property/models/propertyByUserId.model';
import { PropertyService } from '../../admin/Property/Services/property.service';

@Component({
  selector: 'app-property-byuser',
  templateUrl: './property-byuser.component.html',
  styleUrls: ['./property-byuser.component.scss'],
})
export class PropertyByuserComponent {
  // propertyId: number = 0;
  userId: number = 0;
  propertyDetails: propertyByUser | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Assuming 'id' is the route parameter for property details.
      // Initialize propertyDetails as null, or you can use an empty object depending on your use case.
      this.propertyDetails = null;

      // Fetch the property details by propertyId using your service.
      // this.propertyService.getPropertyById(this.userId).subscribe(
      //   (property: propertyByUser) => {
      //     this.propertyDetails = property;
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
    });
  }
}
