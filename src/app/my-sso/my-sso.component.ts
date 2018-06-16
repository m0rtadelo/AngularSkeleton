import { Component, OnInit } from '@angular/core';
import { MyBaseComponent } from '../my-base-component';

@Component({
  selector: 'app-my-sso',
  templateUrl: './my-sso.component.html',
  styleUrls: ['./my-sso.component.css']
})
export class MySsoComponent extends MyBaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
