import { Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

export class MyBaseComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() attachedFormGroup: FormGroup;
  @Input() required = false;
  @Input() readOnly = false;
  @Input() maxLength: number;
  @Input() minLength: number;
  public formControl = new FormControl();
  private validators = [];
  private myControl: AbstractControl;

  constructor() {}

  ngOnInit() {
    this.configure();
  }

  public hasError() {
    return this.attachedFormGroup.controls[this.name].errors !== null;
  }

  public getError() {
    return this.attachedFormGroup.controls[this.name].errors;
  }

  private configure() {
    this.setValidators();
    this.createModel();
  }

  private setValidators() {
    this.validators = [];
    this.setValidatorRequired();
    this.setValidatorMaxLength();
    this.setValidatorMinLength();
  }

  private setValidatorMinLength() {
    if (this.minLength) {
      this.validators.push(Validators.minLength(this.minLength));
    }
  }

  private setValidatorMaxLength() {
    if (this.maxLength) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
  }

  private setValidatorRequired() {
    if (this.required) {
      this.validators.push(Validators.required);
    }
  }

  private createModel() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormControl(null, this.validators));
      this.myControl = this.attachedFormGroup.get(this.name);
    }
  }

}
