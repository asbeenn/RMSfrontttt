import { Route, RouterModule, Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { UserDashModule } from './user-dash.module';
import { NgModule } from '@angular/core';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
const routes: Routes = [{ path: '', component: UserdashboardComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
