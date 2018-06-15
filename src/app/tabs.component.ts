import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html'
})
export class DemoTabsBasicComponent {
  tab = 1;

  public setTab(item: number): void {
    this.tab = item;
  }
}
