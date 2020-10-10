import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetalleTransaccionesComponent} from  './detalle-transacciones/detalle-transacciones.component'

const routes: Routes = [

{
  path: 'transacciones',
  component: DetalleTransaccionesComponent,

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
