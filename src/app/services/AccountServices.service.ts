import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoginModel, RegisterModel } from '../model/AccountModels';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5013/api/Account/';

  headers = new HttpHeaders().set('content-type','application/json');

  Register(reg : RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl + 'Register',reg,{'headers':this.headers}).pipe();
  }

  Login(log : LoginModel):Observable<LoginModel>{
    return this.http.post<LoginModel>(this.baseUrl + 'Login', log ,{'headers':this.headers}).pipe();
  }

  Logout(){
    return this.http.get(this.baseUrl+'Logout').pipe();
  }

  
}
