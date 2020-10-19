import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
