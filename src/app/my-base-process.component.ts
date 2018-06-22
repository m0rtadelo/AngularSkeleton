import { OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyFormGroup } from './myFormGroup';

export class MyBaseProcess implements OnInit {
  public modelForm: MyFormGroup;
  public modelOriginal;

  ngOnInit(): void {
  }

  public saveModel(): void {
    if (this.modelForm.status !== 'VALID') {
      this.modelForm.markFormGroupTouched(undefined);
    } else {
      console.log(this.modelForm.value);
      this.modelOriginal = this.modelForm.getRawValue();
      this.untouch();
      alert('Data saved!');
    }
  }

  private confirmDirty(): boolean {
    if (this.modelForm.dirty) {
      return confirm('You have unsaved changes. Are you sure you want to lost changes?');
    }
    return true;
  }

  public cancel(): void {
    if (this.confirmDirty()) {
      alert('Nothing to do');
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
    // console.log(this.modelOriginal);
    // console.log(this.modelForm.getRawValue());
    console.log(this.modelForm);
  }

  public untouch() {
    this.modelForm.markAsUntouched();
    this.modelForm.markAsPristine();
  }
}
