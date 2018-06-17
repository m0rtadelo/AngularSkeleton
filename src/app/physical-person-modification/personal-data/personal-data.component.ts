import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  @Input() attachedFormGroup: FormGroup;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public valueChanged(data) {
    Object.keys(data).forEach(key => {
      if (key === 'CAM_PFS_APE_1') {
        if (!!!data['CAM_PFS_APE_1']) {
          this.attachedFormGroup.get('CAM_PFS_APE_2').disable();
        } else {
          this.attachedFormGroup.get('CAM_PFS_APE_2').enable();
        }
      }
    });
    this.valueChange.emit(data);
  }
}
