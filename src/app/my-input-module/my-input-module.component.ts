import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-my-input-module',
  templateUrl: './my-input-module.component.html',
  styleUrls: ['./my-input-module.component.css']
})
export class MyInputModuleComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() name: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() attachedFormGroup: FormGroup;
  @Input() mandatory = false;
  public formControl = new FormControl();
  private validators = [];
  private myControl: AbstractControl;

  constructor() { }

  ngOnInit() {
    if (this.mandatory) {
      this.validators.push(Validators.required);
    }
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormControl(null, this.validators));
      this.myControl = this.attachedFormGroup.get(this.name);
    }
  }

  public hasError() {
    return !this.attachedFormGroup.controls[this.name].errors === null;
  }

  public test() {
    console.log(this.attachedFormGroup.controls[this.name]);
  }
}
