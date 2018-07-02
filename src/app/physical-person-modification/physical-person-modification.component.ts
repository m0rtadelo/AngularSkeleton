import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyBaseProcess } from '../my-base-process.component';
import { GetPhysicalPersonService } from '../get-physical-person.service';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent extends MyBaseProcess implements OnInit, AfterViewInit {
  private especial = false;
  constructor(private physicalPersonService: GetPhysicalPersonService ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      addressNotification: new FormGroup({})
    });
  }

  ngAfterViewInit(): void {
    this.loadModel();
  }

  public loadModel(): void {
/*
    const value = {
      personalData: {
        CAM_PFS_NOM: 'Chuck',
        CAM_PFS_APE_1: 'Norrys',
        // CAM_PFS_APE_2: NOT DEFINED. ERROR?
        CAM_PFS_EDAT: '69',
        CAM_PFS_IEXISTENT: 'MUST IGNORE THIS FIELD. ERROR?',
        CAM_GROUP_INEXISTENT: { SOME: 'THING'},
        CAM_PFS_SSO: { PRO: '12', NUM: '99999999', DIG: '21' }
        // CAM_PFS_SSO2: NOT DEFINED. ERROR?
      },
      addressNotification: {
        CAM_PFS_TIP_VIA: 'El Vecino',
        CAM_PFS_NOM_VIA: 'El Alcalde',
        CAM_PFS_PAI_RES: 'Catalunya',
      }
    };
*/
    this.physicalPersonService.load().subscribe(data => {
      console.log(data);
      this.modelForm.patchValue(data);
      this.modelOriginal = this.modelForm.getRawValue();
      this.untouch();
    });
  }
}
