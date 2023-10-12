// custom-validators.ts
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator():ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (control.value && !emailPattern.test(control.value)) {
        return { 'invalidEmail': true };
  }
    return null;
  };
}

export function userNameValidator():ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const emailPattern = /^[a-zA-Z0-9_]+$/;
      if (control.value && !emailPattern.test(control.value)) {
        return { 'invalidUserName': true };
  }
    return null;
  };
}

export function PasswordValidator():ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
    if (control.value && !passwordPattern.test(control.value)) {
      return { 'invalidPassword': true };
    }
  
    return null;  
  };
}

export function passwordPatternValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;

  if (control.value && !passwordPattern.test(control.value)) {
    return { 'invalidPassword': true };
  }

  return null;
}