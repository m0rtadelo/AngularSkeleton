import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataComponent } from './personal-data.component';
import { MyInputModuleModule } from '../../my-input-module/my-input-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModuleModule,
  ],
  declarations: [PersonalDataComponent],
  exports: [PersonalDataComponent]
})
export class PersonalDataModule { }
