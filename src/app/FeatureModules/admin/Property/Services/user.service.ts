import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetUserRequest } from '../models/list-user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  list: GetUserRequest[] = [];
  constructor(private http: HttpClient) {}
  listUser() {
    this.http.get('https://localhost:7000/api/User/GetAllUser').subscribe({
      next: (res) => {
        this.list = res as GetUserRequest[];
        //console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getUserById(id: number): Observable<GetUserRequest> {
    return this.http.get<GetUserRequest>(
      'https://localhost:7000/api/user/' + id
    );
  }
}
