import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DemoTabsBasicComponent } from './tabs.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BindingModule } from './binding/binding.module';
import { BindingService } from './binding/binding.service';
import { AtxTooltipModule, AtxRateModule } from '@atx/material';
import { MyProcessWrapperModule } from './my-process-wrapper/my-process-wrapper.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoTabsBasicComponent,
  ],
  imports: [
    BrowserModule,
    BindingModule,
    AtxTooltipModule,
    AtxRateModule,
    MyProcessWrapperModule,
    TabsModule.forRoot()
  ],
  providers: [BindingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
