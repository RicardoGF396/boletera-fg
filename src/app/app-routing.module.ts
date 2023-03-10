import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'plaza-toros',
    loadChildren: () => import('./plaza-toros/plaza-toros.module').then( m => m.PlazaTorosPageModule)
  },
  {
    path: 'section/:map/:section',
    loadChildren: () => import('./section/section.module').then( m => m.SectionPageModule)
  },
  {
    path: 'interactive-map',
    loadChildren: () => import('./interactive-map/interactive-map.module').then( m => m.InteractiveMapPageModule)
  },  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2PageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
