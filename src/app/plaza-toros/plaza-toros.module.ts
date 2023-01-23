import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlazaTorosPageRoutingModule } from './plaza-toros-routing.module';

import { PlazaTorosPage } from './plaza-toros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlazaTorosPageRoutingModule
  ],
  declarations: [PlazaTorosPage]
})
export class PlazaTorosPageModule {}
