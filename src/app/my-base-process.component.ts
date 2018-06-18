import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export class MyBaseProcess implements OnInit {
  public modelForm: FormGroup;
  public modelOriginal;

  ngOnInit(): void {
  }

  public saveModel(): void {
    if (this.modelForm.status !== 'VALID') {
      this.touchAll();
      alert('Validation errors detected!\nErrors must be fixed.');
    } else {
      console.log(this.modelForm.value);
      this.modelOriginal = this.modelForm.getRawValue();
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
    this.modelOriginal = this.modelForm.getRawValue();
  }

  public resetModel() {
    this.modelForm.reset();
    this.modelForm.setValue(this.modelOriginal);
    this.modelOriginal = this.modelForm.getRawValue();
    this.untouch();
  }

  public showModel(): void {
    console.log(this.modelOriginal);
    console.log(this.modelForm.getRawValue());
    console.log(this.modelForm);
  }

  public untouch() {
    this.modelForm.markAsUntouched();
    this.modelForm.markAsPristine();
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


