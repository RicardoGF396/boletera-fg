import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventoPage } from './evento.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EventoPageRoutingModule } from './evento-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EventoPageRoutingModule
  ],
  declarations: [EventoPage]
})
export class EventoPageModule {}
