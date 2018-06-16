import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from './my-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MyInputComponent],
  exports: [MyInputComponent]
})
export class MyInputModule { }
