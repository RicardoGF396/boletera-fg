import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlazaTorosPage } from './plaza-toros.page';

const routes: Routes = [
  {
    path: '',
    component: PlazaTorosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlazaTorosPageRoutingModule {}
