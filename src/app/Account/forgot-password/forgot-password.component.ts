import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(
    private service : AccountServicesService,
    private router : Router
  ){}

  Logout(){
    this.service.Logout().subscribe(succ => {
      console.log(succ);
      localStorage.removeItem('userKey');
      localStorage.removeItem('expire');
      localStorage.removeItem('role');
     this.router.navigate(['home']);
    },err=> console.log(err));
  }

  isUserRegister(){
    const user = !!localStorage.getItem('userKey');
    if(user){
      return true;
    }
    return false;
  }
}
