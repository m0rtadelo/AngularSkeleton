import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent implements OnInit {
  public modelForm: FormGroup;
  public modelOriginal;

  constructor() { }

  ngOnInit() {
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      AddressNotification: new FormGroup({}),
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

  public clearModel(): void {
    this.modelForm.reset();
    this.modelOriginal = this.modelForm.value;
  }

  public loadModel(): void {
    this.modelForm.setValue({
      personalData: {
        CAM_PFS_NOM: 'Mariano',
        CAM_PFS_APE_1: 'Rajoy',
        CAM_PFS_APE_2: 'Brey',
        CAM_PFS_EDAT: '69',
        CAM_PFS_SSO: { PRO: '12', NUM: '99999999', DIG: '12' }
      },
      AddressNotification: {
        CAM_PFS_TIP_VIA: 'El Vecino',
        CAM_PFS_NOM_VIA: 'El Alcalde'
      }
    });
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

  public cancel(): void {
    if (this.modelForm.dirty) {
      alert('You have unsaved changes. Are you sure you want to cancel/leave?');
    } else {
      alert('No changes detected, you can leave!');
    }
  }

  private untouch() {
    this.modelForm.markAsUntouched();
    this.modelForm.markAsPristine();
  }

  private touchAll() {

  }
}
