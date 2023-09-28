import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RegisterModel } from '../model/RegisterModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {

  constructor(private http: HttpClient) { }

  baseUrl = '';

  headers = new HttpHeaders().set('content-type','application/json');

  Register(reg : RegisterModel):Observable<RegisterModel>{
    return this.http.post<RegisterModel>(this.baseUrl + '',reg,{'headers':this.headers}).pipe();
  }
}
