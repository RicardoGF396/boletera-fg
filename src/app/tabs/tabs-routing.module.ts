import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'boletera',
    component: TabsPage,
    children: [
      {
        path: 'eventos',
        loadChildren: () => import('../eventos/eventos.module').then(m => m.EventosPageModule)
      },
      {
        path: 'evento/:id',
        loadChildren: () => import('../evento/evento.module').then( m => m.EventoPageModule)
      },
      {
        path: 'plaza-toros/:id',
        loadChildren: () => import('../plaza-toros/plaza-toros.module').then( m => m.PlazaTorosPageModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('../carrito/carrito.module').then(m => m.CarritoPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then(m => m.PerfilPageModule)
      },
      {
        path: '',
        redirectTo: '/boletera/eventos',
        pathMatch: 'full'
      }
    ],

  },
  {
    path: '',
    redirectTo: '/boletera/eventos',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
