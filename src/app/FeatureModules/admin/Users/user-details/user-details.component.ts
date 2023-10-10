import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetUserRequest } from '../../Property/models/list-user.model';
import { UserService } from '../../Property/Services/user.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  userId: number = 0;
  userDetails: GetUserRequest | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Assuming 'id' is the route parameter for property details.
      // Initialize propertyDetails as null, or you can use an empty object depending on your use case.
      this.userDetails = null;

      // Fetch the property details by propertyId using your service.
      this.userService.getUserById(this.userId).subscribe(
        (property: GetUserRequest) => {
          this.userDetails = property;
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
