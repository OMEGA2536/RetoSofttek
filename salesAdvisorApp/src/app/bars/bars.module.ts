import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarsRoutingModule } from './bars-routing.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SvgModule } from '../svg/svg.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    TopBarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BarsRoutingModule,
    SvgModule
  ],
  exports: [
    TopBarComponent,
    MenuComponent
  ]
})
export class BarsModule { }
