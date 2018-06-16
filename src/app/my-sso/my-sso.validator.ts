import { FormGroup } from "@angular/forms";

export const SSOValidator = (control: FormGroup) => {
  let pro:FormControl = control.PRO;
  let num:FormControl = control.NUM;
  let dig:FormControl = control.DIG;

  if (my conditions are ok) {
      return null;
  } else {
      return { valid: false };
  }
};
