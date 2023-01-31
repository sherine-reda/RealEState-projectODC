import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects:any;
  building:any;
  user:any = localStorage.getItem('userData');
  userdata:any =  JSON.parse(this.user)
  userRole:any = this.userdata.roleId ;
  // imgloading= true;
  constructor(private _AuthService:AuthService){
    console.log(this.userRole);

    this._AuthService.allProject().subscribe(res=>{
      console.log("Prrrr  ====>" +res.data);

      this.projects = res.data

    },()=>{

    },()=>{
    }
    )
  }
}
