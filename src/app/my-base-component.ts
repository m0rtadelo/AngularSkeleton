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
  @Input() readOnly = false;
  @Input() visible = true;
  @Input() maxLength: number;
  @Input() minLength: number;
  private _required = false;
  @Output() valueChange = new EventEmitter();

  protected validators = [];
  private subscription;

  constructor() {}

  @Input() public set required(value: boolean ) {
    this._required = value;
    if (this.attachedFormGroup && this.attachedFormGroup.contains(this.name)) {
      this.setValidators();
      this.attachedFormGroup.controls[this.name].setValidators(this.validators);
      this.attachedFormGroup.controls[this.name].updateValueAndValidity();
    }
  }
  public get required(): boolean {
    return this._required;
  }

  ngOnInit() {
    this.configure();
    if (this.attachedFormGroup) {
      if (this.attachedFormGroup.get(this.name) instanceof FormControl) {
        this.subscription = this.attachedFormGroup.get(this.name).valueChanges.subscribe(data => {
          this.onChange(data);
        });
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public onChange(value) {
    const data = {};
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
    if (!isNaN(this.minLength)) {
      this.validators.push(Validators.minLength(this.minLength));
    }
  }

  private setValidatorMaxLength() {
    if (!isNaN(this.maxLength)) {
      this.validators.push(Validators.maxLength(this.maxLength));
    }
  }

  private setValidatorRequired() {
    if (this._required) {
      this.validators.push(Validators.required);
    }
  }

  public createModel() {
    if (this.attachedFormGroup) {
      if (!this.attachedFormGroup.contains(this.name)) {
        this.attachedFormGroup.addControl(
          this.name,
          new FormControl(null, this.validators)
        );
      }
    }
  }
}
