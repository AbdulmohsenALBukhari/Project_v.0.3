import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {

  constructor() { }

  iv = CryptoJS.enc.Utf8.parse('7061737323331233');
  secretKey = '123456$#@$^@1ERF';

  Encrpt(value:string): string{
    const key = CryptoJS.enc.Utf8.parse(this.secretKey);
    const iv = CryptoJS.enc.Utf8.parse(this.secretKey);
    const encrpted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(value.toString()),key,{
        keySize: 128 /8,
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrpted.toString();
  }

  

}
