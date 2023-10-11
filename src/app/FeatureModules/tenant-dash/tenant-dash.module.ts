import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantlayoutComponent } from './tenantlayout/tenantlayout.component';
import { TenantdashboardComponent } from './tenantdashboard/tenantdashboard.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [TenantlayoutComponent, TenantdashboardComponent],
  imports: [CommonModule, RouterModule, AdminModule],
})
export class TenantDashModule {}
