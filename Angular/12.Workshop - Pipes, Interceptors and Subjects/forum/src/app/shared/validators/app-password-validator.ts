import { ValidatorFn } from '@angular/forms';

export function appPasswordValidator(): ValidatorFn {
  const regExp = new RegExp(`^[A-Za-z0-9]{5,}$`);

  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appPasswordValidator: true };
  };
}
