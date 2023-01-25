import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InteractiveMapPage } from './interactive-map.page';

const routes: Routes = [
  {
    path: '',
    component: InteractiveMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InteractiveMapPageRoutingModule {}
