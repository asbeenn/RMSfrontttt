import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';
import { ListUsersComponent } from './Users/list-users/list-users.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    ListUsersComponent,
    UserDetailsComponent,
    PropertyListComponent,
    SearchFilterPipe,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdbCollapseModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [PropertyDetailsComponent, PropertyListComponent],
})
export class AdminModule { }
