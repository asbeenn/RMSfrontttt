import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';
import { UserDetailsComponent } from './Users/user-details/user-details.component';
import { AuthGuard } from 'src/app/Services/auth-guard';


const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'property', component: PropertyListComponent, canActivate: [AuthGuard] },
  { path: 'property/add', component: AddPropertyComponent },
  { path: 'property/details/:id'/* ':id' is a route parameter*/, component: PropertyDetailsComponent, canActivate: [AuthGuard] },
  { path: 'user/details/:id', /* ':id' is a route parameter*/ component: UserDetailsComponent, canActivate: [AuthGuard] },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
