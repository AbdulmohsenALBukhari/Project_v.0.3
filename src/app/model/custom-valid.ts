// custom-validators.ts
import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';


export function userNameValidator():ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
      const emailPattern = /^[a-zA-Z0-9_]+$/;
      if (control.value && !emailPattern.test (control.value)) {
        return { 'invalidUserName': false };
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

