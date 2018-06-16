import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressNotificationComponent } from './address-notification.component';
import { MyInputModule } from '../../my-input/my-input.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModule,
  ],
  declarations: [AddressNotificationComponent],
  exports: [AddressNotificationComponent]
})
export class AddressNotificationModule { }
