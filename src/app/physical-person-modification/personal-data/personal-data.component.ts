import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
  @Input() attachedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public valueChanged(data) {
    console.log(data);
  }
}
