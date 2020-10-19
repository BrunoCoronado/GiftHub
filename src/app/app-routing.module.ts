import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import {DetalleTransaccionesComponent} from  './detalle-transacciones/detalle-transacciones.component'
const routes: Routes = [
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'transacciones', component: DetalleTransaccionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
