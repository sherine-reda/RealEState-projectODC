import { Component } from '@angular/core';
import {FormControl , FormGroup , Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  currentUserData:any = localStorage.getItem('edit_ID_user')
  data:any = JSON.parse(this.currentUserData)


  constructor(private _AuthService:AuthService,private _Router:Router){}

  editForm = new FormGroup({
    fName:new FormControl(this.data.fName,[Validators.minLength(3),Validators.maxLength(10)]),
    lName:new FormControl(this.data.lName,[Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl(this.data.age,[Validators.min(16),Validators.max(80)]),
    email:new FormControl(this.data.email,[Validators.email]),
    roleId:new FormControl(this.data.roleId,[Validators.required]),
    status:new FormControl(this.data.status)
  })

  submitReigisterForm(editForm:FormGroup){
  this._AuthService.editUser(editForm.value,this.data._id).subscribe((res)=>{
    console.log(res);
    localStorage.removeItem('edit_ID_user')
    this._Router.navigate(['/alluser'])
  });
  }
}
