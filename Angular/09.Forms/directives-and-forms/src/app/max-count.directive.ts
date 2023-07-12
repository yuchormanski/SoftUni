import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
})
export class MaxCountDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {}
}
