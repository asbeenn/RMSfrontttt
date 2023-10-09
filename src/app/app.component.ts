import { Component } from '@angular/core';
import { login } from './Models/login';
import { signup } from './Models/signup';
import { jwtAuth } from './Models/jwtAuth';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'RMSapp';
}
