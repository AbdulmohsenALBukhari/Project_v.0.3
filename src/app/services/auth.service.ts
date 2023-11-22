import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cryptService } from './crypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient ,
    private cryp: cryptService
  ) { }

  baseUrl = 'http://localhost:5013/api/Account/';

  GetRoleName(userName : string){
    return this.http.get(this.baseUrl + 'GetRoleName/' + userName, {responseType: 'text'}).pipe();
  }

  public installStorage(rem: Boolean,UserName: string){
        const day = new Date();
        if(rem){
          day.setDate(day.getDate() + 15);
        }else{
          day.setMinutes(day.getMinutes() + 35);
        }
        localStorage.setItem('userKey',this.cryp.Encrpt(UserName));
        localStorage.setItem('expire',this.cryp.Encrpt(day.toString()));

        this.GetRoleName(UserName).subscribe(succ =>{
          localStorage.setItem('role',this.cryp.Encrpt(succ.toString()));
        });
  }

}
