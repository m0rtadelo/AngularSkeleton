import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  @Input() attachedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  public valueChanged(data) {
    console.log(data);
  }
}
