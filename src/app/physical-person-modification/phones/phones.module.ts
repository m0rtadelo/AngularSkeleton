import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonesComponent } from './phones.component';
import { MyInputModule } from '../../my-input/my-input.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModule,
  ],
  declarations: [PhonesComponent],
  exports: [PhonesComponent]
})
export class PhonesModule { }
