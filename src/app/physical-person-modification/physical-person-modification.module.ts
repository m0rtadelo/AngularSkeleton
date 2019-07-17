import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhysicalPersonModificationComponent } from './physical-person-modification.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PersonalDataModule } from './personal-data/personal-data.module';
import { AddressNotificationModule } from './address-notification/address-notification.module';
import { PhonesModule } from './phones/phones.module';
import { GetPhysicalPersonService } from '../get-physical-person.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    PersonalDataModule,
    AddressNotificationModule,
    PhonesModule,
    HttpClientModule,
  ],
  declarations: [PhysicalPersonModificationComponent],
  providers: [GetPhysicalPersonService],
  exports: [PhysicalPersonModificationComponent]
})
export class PhysicalPersonModificationModule { }
