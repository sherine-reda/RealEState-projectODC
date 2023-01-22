import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='http://localhost:3000/api/';
  constructor(private _HttpClient:HttpClient) { }

  register(data:any):Observable<any>{
   return this._HttpClient.post(`${this.baseUrl}user/addUser`,data);
  }
}
