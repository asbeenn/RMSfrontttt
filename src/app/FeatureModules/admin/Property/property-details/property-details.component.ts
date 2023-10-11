import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../Services/property.service';
import { GetPropertyRequest } from '../models/property';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserPayLoad } from 'src/app/Main/login/login.component';
import { propertyByUser } from '../models/propertyByUserId.model';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  @Output() sendValue = new EventEmitter<number>();

  sendPropertyIdValue() {
    const idValue = this.propertyDetails?.propertyId;
    this.sendValue.emit(idValue);
  }
  propertyId: number = 0;
  propertyDetails: GetPropertyRequest | null = null;

  propertyByUserId: number = 0;
  propertyUserDetails: propertyByUser | null = null;
  role!: string;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.propertyId = +params['id'];
      this.propertyDetails = null;

      this.propertyByUserId = +params['userid'];
      this.propertyUserDetails = null;
      // Fetch the property details by propertyId using your service.
      this.propertyService.getPropertyById(this.propertyId).subscribe(
        (property: GetPropertyRequest) => {
          this.propertyDetails = property;
        },
        (error) => {
          console.error(error);
        }
      );
      this.propertyService.getPropertyByUserId(this.propertyByUserId).subscribe(
        (property: propertyByUser) => {
          this.propertyUserDetails = property;
        },
        (error) => {
          console.error(error);
        }
      );
    });
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
      this.role = 'Admin';
    } else if (
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ] === 'Tenant'
    ) {
      this.role = 'Tenant';
    } else {
      this.role = 'User';
    }
  }
}
