import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TenantdashboardComponent } from './tenantdashboard/tenantdashboard.component';
import { AuthGuard } from 'src/app/Services/auth-guard';
import { PropertyDetailsComponent } from '../admin/Property/property-details/property-details.component';
const routes: Routes = [
  { path: '', component: TenantdashboardComponent, canActivate: [AuthGuard] },
  { path: 'property/details/:id'/* ':id' is a route parameter*/, component: PropertyDetailsComponent, canActivate: [AuthGuard] },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
