import { FormGroup, FormControl } from '@angular/forms';
/*
export const SSOValidator = (control: FormGroup) => {
  const pro: FormControl = control.get('PRO').value;
  const num: FormControl = control.get('NUM').value;
  const dig: FormControl = control.get('DIG').value;

  if (pro.value === '12') {
      return null;
  } else {
      return { valid: false };
  }
};
*/
function SSOValidator(g: FormGroup) {
  return g.get('PRO').value === '12'
     ? null : {'mismatch': true};
}
