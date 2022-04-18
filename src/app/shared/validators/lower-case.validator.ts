import { AbstractControl } from '@angular/forms';

/**
 * Todo validator recebe como parâmetro um objeto AbstractControl
 */
export function LowerCaseValidator(control: AbstractControl) {
  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { lowerCase: true };
  }
  return null;
}
