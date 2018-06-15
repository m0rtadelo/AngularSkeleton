import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProcessViewComponent } from './my-process-view.component';
import { MyInputModuleModule } from '../my-input-module/my-input-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModuleModule,
  ],
  declarations: [MyProcessViewComponent],
  exports: [MyProcessViewComponent]
})
export class MyProcessViewModule { }
