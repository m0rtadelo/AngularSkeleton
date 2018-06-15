import { Component, OnInit } from '@angular/core';
import { BindingService } from './binding.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  model: string;

  constructor(private bindingService: BindingService) {}

  ngOnInit() {
    // console.log('oninit');
    // this.model = this.bindingService.getValue();
  }
}
