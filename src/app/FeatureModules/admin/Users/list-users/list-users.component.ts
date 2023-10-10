import { Component } from '@angular/core';
import { UserService } from '../../Property/Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  constructor(public service: UserService) {}
  ngOnInit(): void {
    this.service.listUser();
  }
}
