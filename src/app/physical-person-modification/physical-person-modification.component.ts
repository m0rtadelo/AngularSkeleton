import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-physical-person-modification',
  templateUrl: './physical-person-modification.component.html',
  styleUrls: ['./physical-person-modification.component.css']
})
export class PhysicalPersonModificationComponent implements OnInit {
  public model;
  public modelForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.modelForm = new FormGroup({
      personalData: new FormGroup({}),
      AddressNotification: new FormGroup({}),
    });
  }

  public saveModel(): void {
    // TODO: Implementation
  }

  public showModel() {
    console.log(this.modelForm);
  }
}
