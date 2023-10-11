import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { RouterModule } from '@angular/router';
import { MdbCollapseDirective } from 'mdb-angular-ui-kit/collapse';
import { PropertyDetailsComponent } from '../admin/Property/property-details/property-details.component';
import { AdminModule } from '../admin/admin.module';
import { PropertyListComponent } from '../admin/Property/property-list/property-list.component';
import { PropertyByuserComponent } from './property-byuser/property-byuser.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

@NgModule({
  declarations: [UserLayoutComponent, UserdashboardComponent, PropertyByuserComponent, CreateBookingComponent],
  imports: [CommonModule, RouterModule, AdminModule],
})
export class UserDashModule {}
