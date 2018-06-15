import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-process-wrapper',
  templateUrl: './my-process-wrapper.component.html',
  styleUrls: ['./my-process-wrapper.component.css']
})
export class MyProcessWrapperComponent implements OnInit {
  public model;
  public modelForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public saveModel(): void {
    // TODO: Implementation
  }
}
