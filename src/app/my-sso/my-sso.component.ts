import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit {
  @ViewChild('pro') pro: ElementRef;
  @ViewChild('num') num: ElementRef;
  @ViewChild('dig') dig: ElementRef;

  constructor() {
    super();
  }

  public createModel() {
    this.validators.push(this.SSOValidator);
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormGroup({
        PRO: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
        NUM: new FormControl(null, [Validators.maxLength(8), Validators.minLength(8)]),
        DIG: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
      }, this.validators));
    }
  }

  private SSOValidator(g: FormGroup) {
    return (g.get('PRO').value === '12' && g.get('DIG').value === '12' && g.get('NUM').value === '99999999') ||
      ((g.get('PRO').value === '' || g.get('DIG').value === '' || g.get('NUM').value === '') && this.required)
       ? null : {'incorrect': {'must_be': '12 99999999 12'}};
  }

  public hasFocus() {
    return ((this.dig.nativeElement === document.activeElement)
    || (this.num.nativeElement === document.activeElement)
    || (this.pro.nativeElement === document.activeElement));
  }

  public isTouched() {
    const g = this.attachedFormGroup.get(this.name);
    return (g.get('PRO').touched) && (g.get('NUM').touched) && (g.get('DIG').touched);
  }

  public hasValue() {
    const g = this.attachedFormGroup.get(this.name);
    return (g.get('PRO').value) || (g.get('NUM').value) || (g.get('DIG').value);
  }
/*
  protected onChange(value, name) {
    let data = {};
    data[this.name] = {};
    data[this.name][name] = value;
    this.valueChange.emit(data);
  }
*/
}
