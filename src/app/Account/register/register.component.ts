import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/model/RegisterModel';
import { AccountServicesService } from 'src/app/services/AccountServices.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  reg : RegisterModel;

  constructor(
     private formBuilder : FormBuilder,
     private service : AccountServicesService
     ){}

  //index page call first time
  ngOnInit(): void {
    
    this.formData = this.formBuilder.group({
      UserName:['',Validators.required],
      Email:['',Validators.required],
      PasswordHash:['',[Validators.required,Validators.minLength(8)]],
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

    if(this.formData.valid)
      this.validateRegisterModel();
      this.service.Register(this.reg).subscribe(succes =>{
        console.log('succes')
      },error => console.log(error)); 
  }

}
