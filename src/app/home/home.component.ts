import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../model/AccountModels';
import { AccountServicesService } from '../services/AccountServices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  formData : FormGroup;
  log : LoginModel;

  constructor(
    private formBuilder : FormBuilder,
    private service : AccountServicesService,
    private router : Router
    ){}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      UserName:['',Validators.required],
      PasswordHash:['',Validators.required],
      RememberMe:[false,Validators.required]
    });

    this.log ={
      UserName:'',
      PasswordHash:'',
      RememberMe:false
    }
  }

  validateRegisterModel(){
    this.log.UserName = this.formData.value.UserName!;
    this.log.PasswordHash = this.formData.value.PasswordHash!;
    this.log.RememberMe = this.formData.value.RememberMe!;
  }

  onSubmit(){
    console.log(this.formData);

    if (this.formData.valid) {
      this.validateRegisterModel();
      this.service.Login(this.log).subscribe(succ =>{
        console.log(succ);
        this.router.navigate(['upload']);
      });
    }
  }





  
}
