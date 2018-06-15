import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataComponent } from './personal-data.component';
import { MyInputModuleModule } from '../../my-input-module/my-input-module.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyInputModuleModule,
    ReactiveFormsModule,
  ],
  declarations: [PersonalDataComponent],
  exports: [
    PersonalDataComponent,
    ReactiveFormsModule,
  ]
})
export class PersonalDataModule { }
