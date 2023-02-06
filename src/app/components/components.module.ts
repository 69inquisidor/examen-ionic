import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import {  ButtoncComponent } from './buttonc/buttonc.component';



@NgModule({
  declarations: [InputComponent, ButtonComponent,ButtoncComponent],
  imports: [CommonModule, IonicModule],
  exports: [InputComponent, ButtonComponent,ButtoncComponent],

})
export class ComponentsModule { }
