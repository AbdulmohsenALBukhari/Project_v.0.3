import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from '../model/AccountModels';
import { AccountServicesService } from '../services/AccountServices.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  formData : FormGroup;
  log : LoginModel;
  messageL:string;

  messageVlidate ={
    userName : {
      required : 'required'
    },
    PasswordHash : {
      required : 'required',
    }
  }

  constructor(
    private formBuilder : FormBuilder,
    private service : AccountServicesService,
    private router : Router,
    private auth: AuthService
    ){}

  ngOnInit(): void {

    this.messageL = '';
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

  validateLoginModel(){
    this.log.UserName = this.formData.value.UserName!;
    this.log.PasswordHash = this.formData.value.PasswordHash!;
    this.log.RememberMe = this.formData.value.RememberMe!;
  }



  onSubmit(){
    console.log(this.formData);
    if (this.formData.valid) {
      this.validateLoginModel();
      this.service.Login(this.log).subscribe(succ =>{
        const Remember = !!this.formData.value.RememberMe!;
        const userName = this.formData.value.UserName!;
        this.auth.installStorage(Remember,userName);
        this.messageL = 'Login succes';
        this.router.navigate(['forgotPassword']);
        });
    }else{
      this.messageL = 'not succes';
    }
  }





  
}
