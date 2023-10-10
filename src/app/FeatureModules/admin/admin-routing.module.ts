import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin.module';
import { AuthGuard } from 'src/app/Services/auth-guard';
import { AddPropertyComponent } from './Property/add-property/add-property.component';


const routes: Routes = [
  { path:'', component: DashboardComponent, canActivate:[AuthGuard]} ,
  { path: 'addproperty', component: AddPropertyComponent, canActivate:[AuthGuard]},
  { path: 'addproperty/:id', component: AddPropertyComponent, canActivate:[AuthGuard]}

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminRoutingModule { }
