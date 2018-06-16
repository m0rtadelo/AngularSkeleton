import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataComponent } from './personal-data.component';
import { MyInputModule } from '../../my-input/my-input.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MyInputModule,
    ReactiveFormsModule,
  ],
  declarations: [PersonalDataComponent],
  exports: [
    PersonalDataComponent,
    ReactiveFormsModule,
  ]
})
export class PersonalDataModule { }
