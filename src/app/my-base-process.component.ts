import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export class MyBaseProcess implements OnInit {
  public modelForm: FormGroup;
  public modelOriginal;
  public childs = [];

  ngOnInit(): void {
  }

  public saveModel(): void {
    if (this.modelForm.status !== 'VALID') {
      this.touchAll();
      alert('Validation errors detected!\nErrors must be fixed.');
    } else {
      console.log(this.modelForm.value);
      this.modelOriginal = this.modelForm.value;
      this.untouch();
      alert('Data saved!');
    }
  }

  public cancel(): void {
    if (this.modelForm.dirty) {
      alert('You have unsaved changes. Are you sure you want to cancel/leave?');
    } else {
      alert('No changes detected, you can leave!');
    }
  }

  public clearModel(): void {
    this.modelForm.reset();
    this.modelOriginal = this.modelForm.value;
    this.untouch();
  }

  public resetModel() {
    this.modelForm.reset();
    this.modelForm.setValue(this.modelOriginal);
    this.modelOriginal = this.modelForm.value;
    this.untouch();
  }

  public showModel(): void {
    console.log(this.modelForm);
  }

  public untouch() {
    this.modelForm.markAsUntouched();
    this.modelForm.markAsPristine();
    /*
    this.childs.map(child => {
      this.personalData.valueChange(this.modelForm.get('personalData').value);
    })
    this.personalData.valueChange(this.modelForm.get('personalData').value);
    this.personalData.valueChange(this.modelForm.get('addressNotification').value);
    */
  }

  public adaptModelValues(model: FormGroup | FormControl, values) {
    this.adaptValues(model, values);
    this.adaptModel(model, values);
  }

  private adaptModel(model: FormGroup | FormControl, values) {
    // Adding keys to value from model
    Object.keys(model.controls).forEach(control => {
      if (model.controls[control] instanceof FormGroup) {
        if (values[control] === undefined) {
          values[control] = model.value[control];
        }
        this.adaptModel(model.controls[control], values[control]);
      }
      if (model.controls[control] instanceof FormControl) {
        if (values[control] === undefined) {
          values[control] = '';
        }
      }
    });
  }

  private adaptValues(model: FormGroup | FormControl, values ) {
    // Deleting values that not exists in model
    Object.keys(values).forEach(key => {
      if (typeof values[key] === 'object') {
        this.adaptValues(model.controls[key], values[key]);
      } else {
        if (model.get(key) === null) {
          delete values[key];
        }
      }
    });
  }

  private touchAll() {
    this.markFormGroupTouched(this.modelForm);
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      if (control.controls) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
   }
}


