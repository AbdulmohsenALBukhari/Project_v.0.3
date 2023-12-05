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

//  headersl = new HttpHeaders({'content-type':'application/json','withCredentials': 'true'});

  headers = {
    headers:new HttpHeaders({
      'content-type':'application/json'
    }),
    withCredentials : true,
  };

  Register(reg : RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl + 'Register',reg,this.headers).pipe();
  }

  Login(log : LoginModel):Observable<LoginModel>{
    return this.http.post<LoginModel>(this.baseUrl + 'Login', log ,this.headers).pipe();
  }

  Logout(){
    return this.http.get(this.baseUrl+'Logout',{withCredentials : true}).pipe();
  }

  
}
