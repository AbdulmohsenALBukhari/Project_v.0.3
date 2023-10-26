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
  messageL:string;

  messageVlidate ={

  }

  constructor(
    private formBuilder : FormBuilder,
    private service : AccountServicesService,
    private router : Router
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
        console.log(succ);
        const Remember = !!this.formData.value.RememberMe!;
        const day = new Date();
        if(Remember){
          day.setDate(day.getDate() + 15);
        }else{
          day.setMinutes(day.getMinutes() + 35);
        }
        localStorage.setItem('userKey',this.formData.value.UserName!);
        localStorage.setItem('expire',day.toString());
        this.messageL = 'Login succes';
        });
    }else{
      console.log(this.log);
    }
  }





  
}
