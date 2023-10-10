// custom-validators.ts
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value == '') {
        return {'goood':true};
    }
    return null;
  };
}
