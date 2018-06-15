import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProcessViewComponent } from './my-process-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MyProcessViewComponent],
  exports: [MyProcessViewComponent]
})
export class MyProcessViewModule { }
