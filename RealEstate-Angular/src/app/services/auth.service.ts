import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:3000/api/';
  constructor(private _HttpClient: HttpClient,private _Router:Router) {
    if(localStorage.getItem('usertoken')!=null){
      this.currentUserData();
      this. saveRole();
    }
  }
  currentUser = new BehaviorSubject(null);
  userRole = new BehaviorSubject(null);
  // this._AuthService.login(loginForm.value).subscribe((res)=>{
    saveRole(){
      let Role: any = localStorage.getItem('userRole');
      this.userRole.next(Role);
    }
  currentUserData(){
    let token: any = localStorage.getItem('usertoken');
    let data:any =  localStorage.getItem('userData');
    this.currentUser.next(data);

     return data;
  }

  register(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}user/addUser`, data);
  }
  login(data: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}user/login`, data);
  }
  logout(){
    this.currentUser.next(null);
    localStorage.removeItem('usertoken');
    localStorage.removeItem('userData');
    this._Router.navigate(['/login'])
  }
  imageProfile(data: any): Observable<any> {
    return this._HttpClient.patch(`${this.baseUrl}user/profileImg`, data);
  }
  allUser():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}user/allUser`);
  }
  deleteUser(id:any):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}user/deleteUser/${id}`);
  }
  editUser(data:any,id:any):Observable<any>{
    return this._HttpClient.patch(`${this.baseUrl}user/editUser/${id}`,data);
  }
  allProject():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}project/allProject`);
  }
  deleteProject(id:any):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}project/deleteProject/${id}`);
  }
  editProject(data:any,id:any):Observable<any>{
    return this._HttpClient.patch(`${this.baseUrl}project/editProject/${id}`,data);
  }
  detailsProject(id:any):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}project/singleProject/${id}`);
  }
  imageProject(data: any,id:any): Observable<any> {
    return this._HttpClient.patch(`${this.baseUrl}project/projectImg/${id}`, data);
  }



   // sec16
  // getgallery():Observable<any>{
  //   return this._HttpClient.get("https://jsonplaceholder.typicode.com/photos");
  // }
  // getprofileImg()Observable<any>{
  //   return this._HttpClient.patch(`${this.baseUrl}user/profileImg`, data);
  // }

}
