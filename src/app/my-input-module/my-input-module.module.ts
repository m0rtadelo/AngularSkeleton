import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInputModuleComponent } from './my-input-module.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyInputModuleComponent],
  exports: [MyInputModuleComponent]
})
export class MyInputModuleModule { }
