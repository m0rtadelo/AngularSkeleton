import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-input-module',
  templateUrl: './my-input-module.component.html',
  styleUrls: ['./my-input-module.component.css']
})
export class MyInputModuleComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() placeholder: string;
  @Input() attachedFormGroup: FormGroup;

  public formControl = new FormControl();

  constructor() { }

  ngOnInit() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup[this.name] = new FormControl();
    }
    console.log(this.attachedFormGroup);
  }

}
