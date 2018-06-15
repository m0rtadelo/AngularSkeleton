import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-input-module',
  templateUrl: './my-input-module.component.html',
  styleUrls: ['./my-input-module.component.css']
})
export class MyInputModuleComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
