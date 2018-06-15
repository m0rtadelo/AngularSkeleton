import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressNotificationComponent } from './address-notification.component';
import { MyInputModuleModule } from '../../my-input-module/my-input-module.module';

@NgModule({
  imports: [
    CommonModule,
    MyInputModuleModule,
  ],
  declarations: [AddressNotificationComponent],
  exports: [AddressNotificationComponent]
})
export class AddressNotificationModule { }
