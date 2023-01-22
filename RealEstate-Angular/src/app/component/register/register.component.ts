import { Component } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errormsg:string='';

  constructor(private _AuthService:AuthService,private _Router:Router){}

  registerForm = new FormGroup({
    fName:new FormControl(null , [Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    lName:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[Validators.min(16),Validators.max(80),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),Validators.required]),
  })

  submitReigisterForm(registerForm:FormGroup){
  this._AuthService.register(registerForm.value).subscribe((res)=>{
    if(res.message == 'user added successfully'){
        this._Router.navigate(['/login'])
    }else{
      this.errormsg = res.error.message;
    }
  });
  }
  // register
}
