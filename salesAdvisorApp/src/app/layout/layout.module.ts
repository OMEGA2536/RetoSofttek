import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LayoutComponent } from './layout/layout.component';
import { BarsModule } from '../bars/bars.module';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SvgModule,
    BarsModule
  ]
})
export class LayoutModule { }
