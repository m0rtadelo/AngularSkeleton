import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit  {
  @Input() attachedFormGroup: FormGroup;
  onChange;

  constructor() { }

  ngOnInit() {
  }

  public valueChange(data) {
    console.log(data);
    Object.keys(data).forEach(key => {
      console.log(key + ' changed');
      if (key === 'CAM_PFS_APE_1') {
        if (data['CAM_PFS_APE_1'] === '') {
          this.attachedFormGroup.get('CAM_PFS_APE_2').disable();
        } else {
          this.attachedFormGroup.get('CAM_PFS_APE_2').enable();
        }
      }
    });
    //console.log(data);
  }
}
