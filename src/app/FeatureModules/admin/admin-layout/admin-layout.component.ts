import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserPayLoad } from 'src/app/Main/login/login.component';
import { PropertyByuserComponent } from '../../user-dash/property-byuser/property-byuser.component';
import { propertyByUser } from '../Property/models/propertyByUserId.model';
import { PropertyService } from '../Property/Services/property.service';
import { GetPropertyRequest } from '../Property/models/property';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(public service: PropertyService) {}
  role!: string;
  ngOnInit(): void {
    // this.service.getPropertyByUserId(userid);
    const helper = new JwtHelperService();

    const token = localStorage.getItem('jwtToken');

    const decodedToken = helper.decodeToken(token!) as UserPayLoad;

    const Id = decodedToken.UserId;
    const userId = +Id;
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
