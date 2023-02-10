import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SystemUsersRoutingModule } from './system-users-routing.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SalesAdvisorComponent } from './sales-advisor/sales-advisor.component';
import { NewSaleComponent } from './sales-advisor/Dialogs/new-sale/new-sale.component';
import { NewProductComponent } from './sales-advisor/Dialogs/new-product/new-product.component';


@NgModule({
  declarations: [
    SalesAdvisorComponent,
    NewSaleComponent,
    NewProductComponent,
  ],
  imports: [
    CommonModule,
    SystemUsersRoutingModule,
    ComponentsModule,
    SvgModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[],
  providers:[DatePipe]
})
export class SystemUsersModule { }
