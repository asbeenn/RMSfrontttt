import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-tenantlayout',
  templateUrl: './tenantlayout.component.html',
  styleUrls: ['./tenantlayout.component.scss']
})
export class TenantlayoutComponent {
  constructor(private authService: AuthService) { }
  onLogout() {
    this.authService.logoff();
  }

}
