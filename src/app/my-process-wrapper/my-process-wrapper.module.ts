import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProcessWrapperComponent } from './my-process-wrapper.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MyProcessViewModule } from '../my-process-view/my-process-view.module';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    MyProcessViewModule,
  ],
  declarations: [MyProcessWrapperComponent],
  exports: [MyProcessWrapperComponent]
})
export class MyProcessWrapperModule { }
