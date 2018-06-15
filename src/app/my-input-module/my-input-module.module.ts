import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputModuleComponent } from './my-input-module.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [MyInputModuleComponent],
  exports: [MyInputModuleComponent]
})
export class MyInputModuleModule { }
