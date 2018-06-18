import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-notification',
  templateUrl: './address-notification.component.html',
  styleUrls: ['./address-notification.component.css']
})
export class AddressNotificationComponent implements OnInit {
  @Input() attachedFormGroup: FormGroup;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public valueChanged(data) {
    Object.keys(data).forEach(key => {
      if (key === 'CAM_PFS_PRO_RES') {
        if (!!!data['CAM_PFS_PRO_RES']) {
          this.attachedFormGroup.get('CAM_PFS_MUN_RES').disable();
        } else {
          this.attachedFormGroup.get('CAM_PFS_MUN_RES').enable();
        }
      }
      if (key === 'CAM_PFS_PAI_RES') {
        if (!!!data['CAM_PFS_PAI_RES']) {
          this.attachedFormGroup.get('CAM_PFS_PRO_RES').disable();
        } else {
          this.attachedFormGroup.get('CAM_PFS_PRO_RES').enable();
        }
      }
    });
    this.valueChange.emit(data);
  }
}
