import { Component, OnInit } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
/*
  public hasError() {
    let err = false;
    // if(this.attachedFormGroup.get(name).get('PRO'))
    return err;
  }
*/
  public createModel() {
    if (!this.attachedFormGroup.contains(this.name)) {
      this.attachedFormGroup.addControl(this.name, new FormGroup({
        PRO: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
        NUM: new FormControl(null, [Validators.maxLength(8), Validators.minLength(8)]),
        DIG: new FormControl(null, [Validators.maxLength(2), Validators.minLength(2)]),
      }));
    }
  }
}
