import { Route, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TenantdashboardComponent } from './tenantdashboard/tenantdashboard.component';
const routes: Routes = [{ path: '', component: TenantdashboardComponent }];
@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class UserRoutingModule {}
  