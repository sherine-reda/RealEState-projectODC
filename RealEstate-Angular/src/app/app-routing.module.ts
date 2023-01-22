import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './component/alluser/alluser.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { RegisterComponent } from './component/register/register.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'alluser',component:AlluserComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'payment',component:PaymentComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
