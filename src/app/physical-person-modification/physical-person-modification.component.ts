import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    // TODO: Map model to DTO and send to back
  }

  public showModel() {
    console.log(this.modelForm);
  }

  public cancel() {
    if (this.modelForm.dirty) {
      alert('You have unsaved changes. Are you sure you want to cancel/leave?');
    } else {
      alert('No changes detected, you can leave!');
    }
  }
}
