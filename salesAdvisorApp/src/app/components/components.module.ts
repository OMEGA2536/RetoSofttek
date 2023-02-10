import { SvgModule } from './../svg/svg.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SelectComponent } from './select/select.component';
import { CardComponent } from './card/card.component';
import { SelectRoundedComponent } from './select-rounded/select-rounded.component';
import { BtnPrimaryComponent } from './btn-primary/btn-primary.component';
import { BtnSecondaryComponent } from './btn-secondary/btn-secondary.component';
import { BtnAddComponent } from './btn-add/btn-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    SelectComponent,
    CardComponent,
    SelectRoundedComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    BtnAddComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SvgModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SelectComponent,
    CardComponent,
    SelectRoundedComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    BtnAddComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
