import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errormsg:string='';

  constructor(private _AuthService:AuthService,private _Router:Router){}

  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required]),//Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
  })

  submitReigisterForm(loginForm:FormGroup){
  this._AuthService.login(loginForm.value).subscribe((res)=>{
    if(res.message == 'user added successfully'){
    localStorage.setItem('userData',JSON.stringify(res.data.user))
    localStorage.setItem('usertoken' , res.data.token);
    localStorage.setItem('userRole' , res.data.user.roleId);
    localStorage.setItem('userimage',res.data.user.image)
    this._AuthService.saveRole();
    this._AuthService.currentUserData();
    this._Router.navigate(['/home'])
    }
  });


}
}
