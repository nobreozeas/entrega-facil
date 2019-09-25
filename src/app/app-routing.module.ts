import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'meus-pedidos', loadChildren: './meus-pedidos/meus-pedidos.module#MeusPedidosPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'pedido-detalhe', loadChildren: './pedido-detalhe/pedido-detalhe.module#PedidoDetalhePageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'edit-data', loadChildren: './edit-data/edit-data.module#EditDataPageModule' },
  { path: 'minha-conta', loadChildren: './minha-conta/minha-conta.module#MinhaContaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
