import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../Services/property.service';
import { GetPropertyRequest } from '../models/property';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserPayLoad } from 'src/app/Main/login/login.component';
import { propertyByUser } from '../models/propertyByUserId.model';
import { Booking } from 'src/app/Models/booking';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent implements OnInit {
  booking!: Booking;
  @Output() sendValue = new EventEmitter<number>();

  sendPropertyIdValue() {

    var ynResult = confirm("Are you sure you want to book?");
    debugger;
    if (!ynResult) return;

    var userId = this.authService.getUserId();

    this.booking = new Booking();
    this.booking.PropertyId = this.propertyDetails?.propertyId ?? 0;
    this.booking.UserId = userId;

    this.propertyService.createBooking(this.booking)
      .subscribe({
        next: (res) => {
          alert("booking created successfully")
        },
        error: (err) => {

        }
      });
    // const idValue = this.propertyDetails?.propertyId;
    // this.sendValue.emit(idValue);
  }
  propertyId: number = 0;
  propertyDetails: GetPropertyRequest | null = null;

  propertyByUserId: number = 0;
  propertyUserDetails: propertyByUser | null = null;
  role!: string;
  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.booking = new Booking();

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
