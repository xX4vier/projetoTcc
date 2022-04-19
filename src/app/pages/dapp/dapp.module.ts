import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DappRoutingModule } from './dapp-routing.module';
import { HistoricoComponent } from './historico/historico.component';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    HistoricoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    DappRoutingModule
  ]
})
export class DappModule { }
