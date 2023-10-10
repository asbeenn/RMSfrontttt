import { Injectable } from '@angular/core';
import { AddPropertyRequest } from '../models/add-property-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { Property } from '../models/property';
import { ApiService } from 'src/app/Services/app.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  list: Property[] = [];
  constructor(private http: HttpClient, private apiService: ApiService) { }

  addProperty(model: FormData): Observable<void> {
    let url: string = 'Property';
    return this.apiService.post(url, model);
    //return this.http.post<void>('https://localhost:7000/api/Property', model);
  }

  listProperty() {
    let url: string = 'GetAllProperty';
    this.apiService.get(url)
      .subscribe({
        next: (res) => {
          this.list = res as Property[];
          //console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });

    // this.http
    //   .get('https://localhost:7000/api/Property/GetAllProperty')
    //   .subscribe({
    //     next: (res) => {
    //       this.list = res as Property[];
    //       //console.log(res);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
  }

  getPropertyDetails(propertyId: number): Observable<Property> {
    return this.http.get<Property>(
      `https://localhost:7000/api/Property/GetPropertyDetails/${propertyId}`
    );
  }
  getPropertyById(id: number): Observable<Property> {
    return this.http.get<Property>(
      'https://localhost:7000/api/Property/' + id
    );
  }

  getPropertyByUserId(id: number): Observable<Property[]> {
    let url: string = `Property/GetPropertiesByUserId/${id}`
    return this.apiService.get(url);
  }
}
