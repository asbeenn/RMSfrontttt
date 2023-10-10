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
import { HomeComponent } from './Main/home/home.component';
import { UserDetailsComponent } from './FeatureModules/admin/Users/user-details/user-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./FeatureModules/admin/admin.module').then((m) => m.AdminModule), //lazy loading
  },
  {
    path: 'admin/property',
    component: PropertyListComponent,
  },
  {
    path: 'admin/property/add',
    component: AddPropertyComponent,
  },
  {
    path: 'admin/property/details/:id', // ':id' is a route parameter
    component: PropertyDetailsComponent,
  },
  {
    path: 'admin/user/details/:id', // ':id' is a route parameter
    component: UserDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
