import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySsoComponent } from './my-sso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MySsoComponent],
  exports: [MySsoComponent]
})
export class MySsoModule { }
