import { Component } from '@angular/core';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(
    private service : AccountServicesService
  ){}

  onSubmit(){
    this.service.Logout().subscribe(succ => {
      console.log('succ')
      alert('logout succes');
    },err=> console.log(err));
  }
}
