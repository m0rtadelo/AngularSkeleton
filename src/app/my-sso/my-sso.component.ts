import { Component, OnInit } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  public createModel() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormGroup({
        PRO: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
        NUM: new FormControl(null, [Validators.maxLength(8), Validators.minLength(8)]),
        DIG: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
      }, SSOValidator));
    }

    function SSOValidator(g: FormGroup) {
      return g.get('PRO').value === '12' && g.get('DIG').value === '12' && g.get('NUM').value === '99999999'
         ? null : {'incorrect': {'must_be': '12 99999999 12'}};
    }
  }

  public isTouched() {
    return (this.attachedFormGroup.get(this.name).get('PRO').touched ||
      this.attachedFormGroup.get(this.name).get('PRO').value) &&
      (this.attachedFormGroup.get(this.name).get('NUM').touched ||
        this.attachedFormGroup.get(this.name).get('NUM').value) &&
      (this.attachedFormGroup.get(this.name).get('DIG').touched ||
        this.attachedFormGroup.get(this.name).get('DIG').value);
  }
}
