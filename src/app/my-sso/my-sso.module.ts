import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySsoComponent } from './my-sso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MySsoComponent],
  exports: [MySsoComponent]
})
export class MySsoModule { }
