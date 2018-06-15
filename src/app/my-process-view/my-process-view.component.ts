import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-process-view',
  templateUrl: './my-process-view.component.html',
  styleUrls: ['./my-process-view.component.css']
})
export class MyProcessViewComponent implements OnInit {
  @Input() name: string;
  @Input() attachedFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
