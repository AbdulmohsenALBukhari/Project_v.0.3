import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServicesService } from 'src/app/services/AccountServices.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(
    private service : AccountServicesService,
    private router : Router,
    private auth: AuthService
  ){}

  ngOnInit(): void{
    if (!this.auth.CheckStorage()) {
      localStorage.clear();
    }

  }

  Logout(){
    this.service.Logout().subscribe(succ => {
      console.log(succ);
      localStorage.removeItem('userKey');
      localStorage.removeItem('expire');
      localStorage.removeItem('role');
     this.router.navigate(['home']);
    });
  }

  isUserRegister(){
    const user = !!localStorage.getItem('userKey');
    const exp = !!localStorage.getItem('expire');
    const role = !!localStorage.getItem('role');
    if(user && exp && role){
      return true;
    }
    return false;
  }
}
