import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './historico/historico.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [

  { path: 'historico', component: HistoricoComponent },
  { path: 'registro', component: RegistroComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DappRoutingModule { }
