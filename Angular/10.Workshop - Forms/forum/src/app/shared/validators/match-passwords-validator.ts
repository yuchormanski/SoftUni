import { FormGroup, ValidatorFn } from '@angular/forms';

export function matchPasswords(
  passControl: string,
  rePassControl: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass = group.get(passControl);
    const rePass = group.get(rePassControl);
    return pass?.value === rePass?.value ? null : { matchPasswords: true };
  };
}
