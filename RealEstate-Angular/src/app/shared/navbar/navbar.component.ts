import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 isLogin:boolean = false ;
 isSuperAdmin:boolean = false
 constructor(private _AuthService:AuthService){
  _AuthService.currentUser.subscribe(()=>{
    if(_AuthService.currentUser.getValue() != null){
      this.isLogin = true;
    }else{
      this.isLogin =false;
    }
  })

  _AuthService.userRole.subscribe(()=>{
    if(_AuthService.userRole.getValue() == '63acab8dab39761ecaffbccd'){
      this.isSuperAdmin = true;
    }else{
      this.isSuperAdmin =false;
    }
  })

 }

 isLogOut(){
  this._AuthService.logout();
 }
}
