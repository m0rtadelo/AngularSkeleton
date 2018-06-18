import { Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  Validators,
  ControlValueAccessor
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class MyBaseComponent implements OnInit, OnDestroy {
  @Input() name: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() attachedFormGroup: FormGroup;
  @Input() required = false;
  @Input() readOnly = false;
  @Input() maxLength: number;
  @Input() minLength: number;
  @Output() valueChange = new EventEmitter();

  public formControl = new FormControl();
  protected validators = [];
  private subscription;

  constructor() {}

  ngOnInit() {
    this.configure();
    if (this.attachedFormGroup.get(this.name) instanceof FormControl) {
      this.subscription = this.attachedFormGroup.get(this.name).valueChanges.subscribe(data => {
        this.onChange(data);
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onChange(value) {
    let data = {};
    data[this.name] = value;
    this.valueChange.emit(data);
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

  public createModel() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(
        this.name,
        new FormControl(null, this.validators)
      );
    }
  }
}
