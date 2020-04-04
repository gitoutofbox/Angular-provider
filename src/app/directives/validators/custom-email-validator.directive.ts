import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[customEmailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomEmailValidatorDirective, multi: true}]
})
export class CustomEmailValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null { 
 
    if(control.value && control.value.indexOf('@codestudio.com') !== -1) {
      return null;
    } else {
    return { 'custom': true };
    }
  }
}
