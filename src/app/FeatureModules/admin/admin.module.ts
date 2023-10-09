import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminLayoutComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MdbCollapseModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
