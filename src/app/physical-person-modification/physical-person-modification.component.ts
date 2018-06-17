import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyBaseProcess } from '../my-base-process.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { AddressNotificationComponent } from './address-notification/address-notification.component';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent extends MyBaseProcess implements OnInit, AfterViewInit {
  @ViewChild('personalData') personalData: PersonalDataComponent;
  @ViewChild('addressNotification') addressNotification: AddressNotificationComponent;
  public childs = ['personalData', 'addressNotification'];

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      AddressNotification: new FormGroup({})
    });
  }

  ngAfterViewInit(): void {
    this.clearModel();
  }

  public loadModel(): void {
    const value = {
      personalData: {
        CAM_PFS_NOM: 'Chuck',
        CAM_PFS_APE_1: 'Norrys',
        // CAM_PFS_APE_2: NOT DEFINED. ERROR?
        CAM_PFS_EDAT: '69',
        CAM_PFS_IEXISTENT: 'MUST IGNORE THIS FIELD. ERROR?',
        CAM_PFS_SSO: { PRO: '12', NUM: '99999999', DIG: '12' }
        // CAM_PFS_SSO2: NOT DEFINED. ERROR?
      },
      AddressNotification: {
        CAM_PFS_TIP_VIA: 'El Vecino',
        CAM_PFS_NOM_VIA: 'El Alcalde'
      }
    };
    this.adaptModelValues(this.modelForm, value);
    this.modelForm.setValue(value, {emitEvent: true});
    this.modelOriginal = this.modelForm.value;
    this.childs.map(child => {
      this[child].valueChange(this.modelForm.get(child).value);
    });
    this.untouch();
  }
}
