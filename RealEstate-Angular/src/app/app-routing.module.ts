import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './component/add-project/add-project.component';
import { AlluserComponent } from './component/alluser/alluser.component';
import { DetailsProjectComponent } from './component/details-project/details-project.component';
import { EditProjectComponent } from './component/edit-project/edit-project.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { RegisterComponent } from './component/register/register.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { AuthGuard } from './guard/auth.guard';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'alluser',component:AlluserComponent},
  {path:'alluser/editUser',component:EditUserComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'projects/addProject',component:AddProjectComponent},
  {path:'projects/editProject',component:EditProjectComponent},
  {path:'projects/projectDetails',component:DetailsProjectComponent},
  {path:'payment',component:PaymentComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
