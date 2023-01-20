import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  baseUrl = "http://localhost:3000/api/"
  constructor(private http : HttpClient) { }
  alluser(): Observable<any> {
    return this.http.get(`${this.baseUrl}user/allUser`)
  }
}
