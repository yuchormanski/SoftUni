import { ValidatorFn } from '@angular/forms';

export function appEmailValidator(domains: string[]): ValidatorFn {
  //    /^[\w]{6,}@gmail\.(bg|com)$/gm
  //    /[^@]{6,}@gmail\.(bg|com)$/gm

  const domainStrings = domains.join('|');
  //   const regExp = new RegExp(`^[\w]{6,}@gmail\.(${domainStrings})$`);
  const regExp = new RegExp(`[^@]{6,}@gmail\.(${domainStrings})$`);

  return (control) => {
    return control.value === '' || regExp.test(control.value)
      ? null
      : { appEmailValidator: true };
  };
}
