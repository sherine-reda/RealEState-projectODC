import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {FormControl , FormGroup , Validators} from '@angular/forms'


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  baseUrl = "http://localhost:3000/"
  userData:any = localStorage.getItem('userData')
  data:any = JSON.parse(this.userData)

  path:any
  //  = this.data.image.slice(this.data.image.indexOf("/")+1);
  pathImg:any
  // = this.baseUrl + this.path


  constructor(private _AuthService:AuthService){
  console.log(this.path);
    this.pathImage();
  }

  image : any


pathImage(){
  if(this.data.image != null){
    this.path= this.data.image.slice(this.data.image.indexOf("/")+1);
    this.pathImg = this.baseUrl + this.path
  }
}
  handleChange(eve:any){
    console.log(eve)
    this.image = eve.target.files[0]
  }

  handleSubmit(){
    let formData = new FormData()
    formData.append('img' , this.image)
    // formData.append('firstName' , this.model.firstName )
    // formData.append('lastName' , this.model.lastName )
       console.log(formData);

    this._AuthService.imageProfile(formData).subscribe((res)=>{
      console.log(res)
    },(e)=>console.log(e)
    )

  }
}

