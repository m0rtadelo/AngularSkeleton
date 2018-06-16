import { Component, OnInit } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit {
  // public ssoFormGroup: FormGroup;

  constructor() {
    super();
    //  this.ssoFormGroup = this.attachedFormGroup.get(this.name);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log(this.attachedFormGroup);
    console.log(this.attachedFormGroup[this.name]);
    console.log(this.attachedFormGroup.get(this.name));
  }

  public createModel() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormGroup({
        PRO: new FormControl('', Validators.maxLength(2)),
        NUM: new FormControl('', Validators.maxLength(8)),
        DIG: new FormControl('', Validators.maxLength(2)),
      })); // new FormControl(null, this.validators));
      // this.ssoFormGroup = this.attachedFormGroup[this.name];
    }
  }
}
