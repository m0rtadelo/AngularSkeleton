import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressNotificationComponent } from './address-notification.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddressNotificationComponent],
  exports: [AddressNotificationComponent]
})
export class AddressNotificationModule { }
