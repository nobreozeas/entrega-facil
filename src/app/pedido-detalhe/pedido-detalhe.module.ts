import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidoDetalhePage } from './pedido-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidoDetalhePage]
})
export class PedidoDetalhePageModule {}
