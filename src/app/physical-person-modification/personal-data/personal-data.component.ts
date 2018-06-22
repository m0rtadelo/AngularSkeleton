import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyFormGroup } from '../../myFormGroup';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  @Input() attachedFormGroup: MyFormGroup;

  constructor() { }

  ngOnInit() {
  }

  public valueChanged(data) {
    console.log(data);
  }
}
