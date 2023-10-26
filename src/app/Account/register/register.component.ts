import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/model/AccountModels';
import { userNameValidator } from 'src/app/model/custom-valid';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  reg : RegisterModel;
  message:string;

  messageVlidate = {
    userName : {
      required : 'required',
      minLength : 'minLength 3',
      invalidUserName : 'user name It contains @#$%^',
      maxLength : 'user name is to long maxLength is 20'
    },
    Email : {
      required : 'required',
      notValid : 'email is incorrect',
      invalidEmail : 'invalid Email'
    },
    PasswordHash : {
      required : 'required',
      minLength : 'minLength 8',
    },
    confirmPassword : {
      required : 'required',
      minLength : 'minLength 8',
    }
  }

  constructor(
     private formBuilder : FormBuilder,
     private service : AccountServicesService
     ){}

  //index page call first time
  ngOnInit(): void {
    
    this.message = '';
    this.formData = this.formBuilder.group({
      UserName:[null, [Validators.required,userNameValidator(),Validators.minLength(3),Validators.maxLength(20)]],
      Email:[null,[Validators.required,Validators.email]],
      PasswordHash:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required]],
    });

    this.reg = {
      UserName:'',
      Email:'',
      PasswordHash:''
    }
  }

  validateRegisterModel(){
    this.reg.UserName = this.formData.value.UserName!;
    this.reg.Email = this.formData.value.Email!;
    this.reg.PasswordHash = this.formData.value.PasswordHash!;
  }
  
  onSubmit(){
    if(this.formData.valid){
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(succ=>{
        console.log('succer')
      this.message = 'Register success and check email';
      });
    }else{
      this.message = 'not success';
    }
  }

}