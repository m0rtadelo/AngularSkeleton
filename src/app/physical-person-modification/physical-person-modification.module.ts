import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicalPersonModificationComponent } from './physical-person-modification.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { AddressNotificationModule } from './address-notification/address-notification.module';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    PersonalDataModule,
    AddressNotificationModule,
  ],
  declarations: [PhysicalPersonModificationComponent],
  exports: [PhysicalPersonModificationComponent]
})
export class PhysicalPersonModificationModule { }
