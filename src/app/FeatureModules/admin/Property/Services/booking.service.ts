import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  bookingUrl = 'Booking/createBooking';
  constructor(private http: HttpClient, private router: Router) {}

  bookProperty(propertyId: number, userId: number) {
    const requestBody = { propertyId, userId };

    return this.http
      .post(`${environment.apiURL}/${this.bookingUrl}`, requestBody)
      // .subscribe((response) => {
      //   // After a successful HTTP request, you can navigate to the desired component.
      //   this.router.navigate(['user/book/:id/booked']); // Replace 'other-component' with the actual route path of the component you want to navigate to.
      // });
  }
}
