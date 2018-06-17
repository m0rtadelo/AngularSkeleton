import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent implements OnInit {
  public modelForm: FormGroup;
  public modelOriginal;

  constructor() {}

  ngOnInit() {
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      AddressNotification: new FormGroup({})
    });
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
  }

  public loadModel(): void {
    const value = {
      personalData: {
        CAM_PFS_NOM: 'Chuck',
        CAM_PFS_APE_1: 'Norrys',
        CAM_PFS_EDAT: '69',
        CAM_PFS_SSO: { PRO: '12', NUM: '99999999', DIG: '12' }
      },
      AddressNotification: {
        CAM_PFS_TIP_VIA: 'El Vecino',
        CAM_PFS_NOM_VIA: 'El Alcalde'
      }
    };
    this.adaptModel(this.modelForm, value);
    this.modelForm.setValue(value);

    this.modelOriginal = this.modelForm.value;
    this.untouch();
  }

  public resetModel() {
    this.modelForm.setValue(this.modelOriginal);
    this.untouch();
  }

  public showModel(): void {
    console.log(this.modelForm);
  }

  private untouch() {
    this.modelForm.markAsUntouched();
    this.modelForm.markAsPristine();
  }

  private adaptModel(model: FormGroup | FormControl, values) {
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

  // TODO: Enable visibility of all errors
  private touchAll() {}
}
