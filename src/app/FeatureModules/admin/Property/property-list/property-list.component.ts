import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../Services/property.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserPayLoad } from 'src/app/Main/login/login.component';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent implements OnInit {
  searchText!: string;
  role!: string;
  constructor(public service: PropertyService) {}
  ngOnInit(): void {
    this.service.listProperty();
    // this.service.getPropertyById();
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
