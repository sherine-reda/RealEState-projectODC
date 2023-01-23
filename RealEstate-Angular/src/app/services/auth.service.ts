import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api/';
  constructor(private _HttpClient: HttpClient) {}
  currentUser = new BehaviorSubject(null);
  userRole = new BehaviorSubject(null);
  // this._AuthService.login(loginForm.value).subscribe((res)=>{
    saveRole(){
      let Role: any = localStorage.getItem('userRole');
      this.userRole.next(Role);
    }
  currentUserData(){
    let token: any = localStorage.getItem('usertoken');
    this.currentUser.next(jwtDecode(token));
    console.log('cuuuuuuu=>' + this.currentUser);
  }

  register(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}user/addUser`, data);
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}user/login`, data);
  }
}
