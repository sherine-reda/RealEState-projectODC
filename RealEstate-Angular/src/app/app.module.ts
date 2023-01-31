import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AlluserComponent } from './component/alluser/alluser.component';
import { PaymentComponent } from './component/payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './component/carousel/carousel.component';
import { PropertiesComponent } from './component/properties/properties.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { EditProjectComponent } from './component/edit-project/edit-project.component';
import { DetailsProjectComponent } from './component/details-project/details-project.component';
import { AddProjectComponent } from './component/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,
    ProjectsComponent,
    NotfoundComponent,
    AlluserComponent,
    PaymentComponent,
    CarouselComponent,
    PropertiesComponent,
    ContactUsComponent,
    EditUserComponent,
    EditProjectComponent,
    DetailsProjectComponent,
    AddProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
