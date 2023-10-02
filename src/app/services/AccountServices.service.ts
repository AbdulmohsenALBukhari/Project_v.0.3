import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RegisterModel } from '../model/RegisterModel';
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
}
