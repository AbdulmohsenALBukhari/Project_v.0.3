import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Account/register/register.component';
import { ForgotPasswordComponent } from './Account/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
