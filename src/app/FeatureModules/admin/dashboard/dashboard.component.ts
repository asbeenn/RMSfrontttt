import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Property/Services/property.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Property } from '../Property/models/property';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private propertyService: PropertyService, private authService: AuthService) { }
  properties!: Property[];

  ngOnInit(): void {
    let userId = this.authService.getUserId();
    this.propertyService.getPropertyByUserId(userId)
      .subscribe({
        next: (res) => {
          this.properties = res as Property[];
          console.log(this.properties)
        },
        error: (error) => {
          this.properties = [];
        }
      })
  }

}
