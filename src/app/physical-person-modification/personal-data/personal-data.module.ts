import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDataComponent } from './personal-data.component';
import { MyInputModule } from '../../my-input/my-input.module';
import { MySsoModule } from '../../my-sso/my-sso.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModule,
    MySsoModule,
  ],
  declarations: [PersonalDataComponent],
  exports: [
    PersonalDataComponent,
  ]
})
export class PersonalDataModule { }
