import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../admin/Property/Services/booking.service';
import { HttpClient } from '@angular/common/http';
import { GetPropertyRequest } from '../../admin/Property/models/property';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserPayLoad } from 'src/app/Main/login/login.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  model!: GetPropertyRequest;
  routeSub!: Subscription;
  propertyId: number = 0;
  constructor(
    private http: HttpClient,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params);
    //   this.propertyId = +params['id'];
    // });
    this.routeSub = this.route.params.subscribe({
      next: (params) => {
        console.log(params);

        console.log(params['id']);

        this.propertyId = params['id'];
        console.log(this.propertyId);
      },
    });
  }

  confirmBooking() {
    debugger;
    const helper = new JwtHelperService();

    const token = localStorage.getItem('jwtToken');

    const decodedToken = helper.decodeToken(token!) as UserPayLoad;

    const Id = decodedToken.UserId;
    const userId = +Id;
    const bookingDate = new Date().toISOString(); // Replace with the actual booking date
    // const bookingStatus = 'Confirmed';
    this.bookingService.bookProperty(this.propertyId, userId).subscribe(
      (response) => {
        // Handle the successful response here
        console.log('Booking created successfully', response);
        this.router.navigate(['user']);
        
        // You can also perform any other actions after a successful booking
      },
      (error) => {
        // Handle any errors that occur during the API call
        console.error('Error creating booking', error);
      }
    );
  }
  cancelBooking() {}
}
