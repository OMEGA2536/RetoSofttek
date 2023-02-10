import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgRoutingModule } from './svg-routing.module';
import { SvgTriangleDownComponent } from './svg-triangle-down/svg-triangle-down.component';
import { SvgSettingComponent } from './svg-setting/svg-setting.component';
import { SvgPowerComponent } from './svg-power/svg-power.component';
import { SvgUserComponent } from './svg-user/svg-user.component';


@NgModule({
  declarations: [
    SvgTriangleDownComponent,
    SvgSettingComponent,
    SvgPowerComponent,
    SvgUserComponent,
  ],
  imports: [
    CommonModule,
    SvgRoutingModule
  ],
  exports: [
    SvgTriangleDownComponent,
    SvgSettingComponent,
    SvgPowerComponent,
    SvgUserComponent,
  ]
})
export class SvgModule { }
