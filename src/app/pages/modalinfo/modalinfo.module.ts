import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalinfoPageRoutingModule } from './modalinfo-routing.module';

import { ModalinfoPage } from './modalinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalinfoPageRoutingModule
  ],
  declarations: [ModalinfoPage]
})
export class ModalinfoPageModule {}
