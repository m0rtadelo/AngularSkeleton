import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent extends ProcessViewComponent implements OnInit {
  public model;
  public modelForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public saveModel(): void {
    // TODO: Implementation
  }

}
