import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  standalone: true,
  providers: [
    { // let angular know we are using custom validator
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true,
    }
  ]
})
export class EmailvalidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // abstracat control gives value of the control

    const value = control.value as string;
    if (value.includes('test') || value === 'test@gmail.com')
      return{
        invalidEmail: true    
      }
      return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
   
  }

}
