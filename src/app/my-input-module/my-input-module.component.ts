import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MyBaseComponent } from '../my-base-component';

@Component({
  selector: 'app-my-input-module',
  templateUrl: './my-input-module.component.html',
  styleUrls: ['./my-input-module.component.css']
})
export class MyInputModuleComponent extends MyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
