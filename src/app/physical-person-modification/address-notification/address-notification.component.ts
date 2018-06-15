import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-notification',
  templateUrl: './address-notification.component.html',
  styleUrls: ['./address-notification.component.css']
})
export class AddressNotificationComponent implements OnInit {
  @Input() attachedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
