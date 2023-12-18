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

  button1:boolean;
  message:string;


  constructor(
    private service : AccountServicesService,
    private router : Router,
    private auth: AuthService
  ){}

  ngOnInit(): void{

    const userKey = localStorage.getItem('userKey');
    const expire = localStorage.getItem('expire');
    const role = localStorage.getItem('role');
    if(userKey != null && expire != null && role != null){
      if(!!this.auth.CheckStorage()){
        this.Logout();
      }
    }
    if (userKey == null) {
      console.log('user is not Authentication');
    }
  }

  Logout(){
    this.service.Logout().subscribe(succ => {
      console.log(succ);
      localStorage.clear();
      localStorage.removeItem('userKey');
      localStorage.removeItem('expire');
      localStorage.removeItem('role');
      console.log('user is not Authentication');
      this.message = 'logout successfully';
      this.button1 = true;
    // this.router.navigate(['']);
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
