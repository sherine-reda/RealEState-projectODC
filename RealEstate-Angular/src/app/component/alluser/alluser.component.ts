import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.scss'],
})
export class AlluserComponent {
  users: any;
  // imgloading= true;

  constructor(private _AuthService: AuthService) {
    this._AuthService.allUser().subscribe(
      (res) => {
        console.log(res);

        this.users = (res.data);
      },
      () => {},
      () => {}
    );
  }
  handelDalete(id: any) {
    this._AuthService.deleteUser(id).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => console.log(e)
    );
    this._AuthService.allUser().subscribe(
      (res) => {
        console.log(res);

        this.users = res.data;
      },
      () => {},
      () => {}
    );
  }
  handeledit(id: any) {
    localStorage.setItem('edit_ID_user', JSON.stringify(id));
  }
}
