import { Injectable } from '@angular/core';
import { AddPropertyRequest } from '../models/add-property-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { GetPropertyRequest } from '../models/property';
import { propertyByUser } from '../models/propertyByUserId.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  list: GetPropertyRequest[] = [];
  userlist: propertyByUser[] = [];
  constructor(private http: HttpClient) {}

  addProperty(model: FormData): Observable<void> {
    return this.http.post<void>('https://localhost:7000/api/Property', model);
  }

  listProperty() {
    this.http
      .get('https://localhost:7000/api/Property/GetAllProperty')
      .subscribe({
        next: (res) => {
          this.list = res as GetPropertyRequest[];
          //console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
  listPropertyByUser() {
    this.http.get('https://localhost:7000/api/Property/userId').subscribe({
      next: (res) => {
        this.userlist = res as propertyByUser[];
        //console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  // getPropertyDetails(propertyId: number): Observable<GetPropertyRequest> {
  //   return this.http.get<GetPropertyRequest>(
  //     `https://localhost:7000/api/Property/GetPropertyDetails/${propertyId}`
  //   );
  // }
  getPropertyById(id: number): Observable<GetPropertyRequest> {
    return this.http.get<GetPropertyRequest>(
      'https://localhost:7000/api/Property/' + id
    );
  }
  getPropertyByUserId(userid: number): Observable<propertyByUser> {
    return this.http.get<propertyByUser>(
      'https://localhost:7000//api/Property/' + userid
    );
  }
}
