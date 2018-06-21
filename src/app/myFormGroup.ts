import { FormGroup } from '@angular/forms';

export class MyFormGroup extends FormGroup {

  public getErrors() {
    const result = [];
    Object.keys(this.controls).forEach(key => {
      if (this.get(key).errors) {
        result.push(this.get(key).errors);
      }
    });
    return result;
  }

}
