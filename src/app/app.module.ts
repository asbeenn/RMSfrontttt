import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { LoginComponent } from './Main/login/login.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { AdminModule } from './FeatureModules/admin/admin.module';
import { MainLayoutComponent } from './Main/main-layout/main-layout.component';
import { PropertyListComponent } from './FeatureModules/admin/Property/property-list/property-list.component';
import { AdminLayoutComponent } from 'src/app/FeatureModules/admin/admin-layout/admin-layout.component';
import { SignupComponent } from './Main/signup/signup.component';
import { AuthenticationInterceptor } from './Services/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCollapseModule,
    BrowserAnimationsModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
