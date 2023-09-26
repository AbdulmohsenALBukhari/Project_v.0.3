import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData! : FormGroup;
  loading = false;
  submitted = false;

  constructor(
     private formBuilder : FormBuilder,
     ){}

  //index page call first time
  ngOnInit(): void {
    
    this.formData = this.formBuilder.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      PasswordHash:['',[Validators.required,Validators.minLength(8)]],
    });

  }
  // convenience getter for easy access to form fields
  get getForm(){
    return this.formData.controls;
  }
  
  onSubmit(){
    console.log(this.formData);

  }

}
