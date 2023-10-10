import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "https://localhost:7000/api/";
  endpoint: String = "";
  constructor(private httpClient: HttpClient) { }

  get(url: string, params?: HttpParams): Observable<any> {

    this.endpoint = this.baseUrl.concat(url);
    return this.httpClient.get(this.endpoint.toString(), { params })
  }

  post(url: string, body: Object): Observable<any> {
    this.endpoint = this.baseUrl.concat(url);
    var response = this.httpClient.post(this.endpoint.toString(), body);
    debugger;
    return response;
  }
}
