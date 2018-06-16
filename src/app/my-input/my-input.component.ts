import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent extends MyBaseComponent implements OnInit {
  @ViewChild('input') input: ElementRef;
  @Input() size: number;

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.size) {
      this.input.nativeElement.size = this.size;
    }
  }
}
