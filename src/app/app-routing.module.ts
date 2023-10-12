import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './FeatureModules/admin/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './Main/main-layout/main-layout.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './Main/login/login.component';
import { PropertyListComponent } from './FeatureModules/admin/Property/property-list/property-list.component';
import { AddPropertyComponent } from './FeatureModules/admin/Property/add-property/add-property.component';
import { SignupComponent } from './Main/signup/signup.component';
import { PropertyDetailsComponent } from './FeatureModules/admin/Property/property-details/property-details.component';
import { UserDetailsComponent } from './FeatureModules/admin/Users/user-details/user-details.component';
import { UserLayoutComponent } from './FeatureModules/user-dash/user-layout/user-layout.component';
import { PropertyByuserComponent } from './FeatureModules/user-dash/property-byuser/property-byuser.component';
import { TenantlayoutComponent } from './FeatureModules/tenant-dash/tenantlayout/tenantlayout.component';
import { CreateBookingComponent } from './FeatureModules/user-dash/create-booking/create-booking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      // { path: '', component: AppComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'user',
    //component: UserLayoutComponent,
    // /User/book
    loadChildren: () =>
      import('./FeatureModules/user-dash/user-routing-module').then(
        (m) => m.UserRoutingModule
      ), //lazy loading
  },
  {
    path: 'user/book/:id',
    component: CreateBookingComponent,
  },
  {
    path: 'user/id',
    component: PropertyByuserComponent,
  },
  // {
  //   path: 'user/book/:id/booked',
  //   component: PropertyByuserComponent,
  // },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./FeatureModules/admin/admin.module').then((m) => m.AdminModule), //lazy loading
  },
  {
    path: 'tenant',
    component: TenantlayoutComponent, loadChildren: () => import('./FeatureModules/tenant-dash/tenant-dash.module').then((m) => m.TenantDashModule)
  },
  // {
  //   path: 'admin/property',
  //   component: PropertyListComponent,
  // },
  // {
  //   path: 'admin/property/add',
  //   component: AddPropertyComponent,
  // },
  // {
  //   path: 'admin/property/details/:id', // ':id' is a route parameter
  //   component: PropertyDetailsComponent,
  // },
  // {
  //   path: 'admin/user/details/:id', // ':id' is a route parameter
  //   component: UserDetailsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
