import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit, OnDestroy {
  @ViewChild('pro') pro: ElementRef;
  @ViewChild('num') num: ElementRef;
  @ViewChild('dig') dig: ElementRef;
  @Input() namePro: string;
  @Input() nameNum: string;
  @Input() nameDig: string;
  private subsPro;
  private subsNum;
  private subsDig;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.subsPro = this.attachedFormGroup.get(this.namePro).valueChanges.subscribe(value => {
      this.setValues();
    });
    this.subsNum = this.attachedFormGroup.get(this.nameNum).valueChanges.subscribe(value => {
      this.setValues();
    });
    this.subsDig = this.attachedFormGroup.get(this.nameDig).valueChanges.subscribe(value => {
      this.setValues();
    });
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.subsPro.unsubscribe();
    this.subsDig.unsubscribe();
    this.subsNum.unsubscribe();
  }

  public createModel() {
    this.addValidators();
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormGroup({
        PRO: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
        NUM: new FormControl(null, [Validators.maxLength(8), Validators.minLength(8)]),
        DIG: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
      }, this.validators));
      this.attachedFormGroup.addControl(this.namePro, new FormControl(null));
      this.attachedFormGroup.addControl(this.nameNum, new FormControl(null));
      this.attachedFormGroup.addControl(this.nameDig, new FormControl(null));
    }
  }

  private addValidators() {
    this.validators.push(this.SSOValidator);
    if (this.required) {
      this.validators.push(this.requiredValidator);
    }
  }

  private SSOValidator(g: FormGroup) {
    if (!!!g.get('PRO').value || !!!g.get('NUM').value || !!!g.get('DIG').value) {
      return null;
    }
    return (g.get('PRO').value === '12' && g.get('DIG').value === '12' && g.get('NUM').value === '99999999')
       ? null : {'incorrect': {'must_be': '12 99999999 12'}};
  }

  private requiredValidator(g: FormGroup) {
    return ((g.get('PRO').value === '' || g.get('PRO').value === null )
    || (g.get('DIG').value === '' || g.get('DIG').value === null )
    || (g.get('NUM').value === '' || g.get('NUM').value === null))
      ? {'required' : true} : null;
  }

  public hasFocus() {
    if (!!!this.pro) {
      return false;
    }
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

  public onChange() {
    const data = {};
    data[this.name] = this.attachedFormGroup.get(this.name).value;
    this.valueChange.emit(data);
  }

  private setValues() {
    this.attachedFormGroup.get(this.name).get('PRO').setValue(this.attachedFormGroup.get(this.namePro).value);
    this.attachedFormGroup.get(this.name).get('NUM').setValue(this.attachedFormGroup.get(this.nameNum).value);
    this.attachedFormGroup.get(this.name).get('DIG').setValue(this.attachedFormGroup.get(this.nameDig).value);
  }
}
