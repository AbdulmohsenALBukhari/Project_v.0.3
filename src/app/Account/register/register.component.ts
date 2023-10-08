import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/model/AccountModels';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  reg : RegisterModel;

  messageVlidate = {
    userName : {
      require : 'require',
      minLength : 'minLength 3'
    },
    Email : {
      require : 'require',
      notValid : 'email is incorrect'
    },
    PasswordHash : {
      require : 'require',
      minLength : '8',
    },
    confirmPassword : {
      require : 'require',
      minLength : '8',
    }
  }

  constructor(
     private formBuilder : FormBuilder,
     private service : AccountServicesService
     ){}

  //index page call first time
  ngOnInit(): void {
    
    this.formData = this.formBuilder.group({
      UserName:['',Validators.required,Validators.minLength(3)],
      Email:['',Validators.required],
      PasswordHash:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword:['',[Validators.required,Validators.minLength(8)]],
    });

    this.reg = {
      UserName:'',
      Email:'',
      PasswordHash:''
    }
  }

  minLengthUserName(){
    if (this.formData.value.UserName == '') {
      return true;
    }
    if (this.formData.value.UserName.length <= 3) {
      return true;
    }
      return false;
  }

  validateRegisterModel(){
    this.reg.UserName = this.formData.value.UserName!;
    this.reg.Email = this.formData.value.Email!;
    this.reg.PasswordHash = this.formData.value.PasswordHash!;
  }
  
  onSubmit(){
    console.log(this.formData);

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
