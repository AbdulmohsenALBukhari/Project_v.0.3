import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/model/AccountModels';
import { PasswordValidator, emailValidator, passwordPatternValidator, userNameValidator } from 'src/app/model/custom-valid';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  reg : RegisterModel;
  submitted = false;

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
      PasswordValidator : 'Password Validator'
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
    
    this.formData = this.formBuilder.group({
      UserName:[null, [Validators.required,userNameValidator(),Validators.minLength(3),Validators.maxLength(20)]],
      Email:[null,[Validators.required,Validators.email,emailValidator()]],
      PasswordHash:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,[Validators.required,Validators.minLength(8)]],
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
    console.log(this.formData);

    this.submitted = true;

    if(this.formData.valid)
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(succes =>{
       setTimeout(() => {
        console.log('succes')
        this.formData.reset();
       }, 3500);
      },error => console.log(error)); 
  }

}
