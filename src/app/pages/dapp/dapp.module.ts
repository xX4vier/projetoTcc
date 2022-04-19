import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DappRoutingModule } from './dapp-routing.module';
import { HistoricoComponent } from './historico/historico.component';


@NgModule({
  declarations: [
    HistoricoComponent
  ],
  imports: [
    CommonModule,
    DappRoutingModule
  ]
})
export class DappModule { }
