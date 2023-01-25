import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteractiveMapPageRoutingModule } from './interactive-map-routing.module';

import { InteractiveMapPage } from './interactive-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteractiveMapPageRoutingModule
  ],
  declarations: [InteractiveMapPage]
})
export class InteractiveMapPageModule {}
