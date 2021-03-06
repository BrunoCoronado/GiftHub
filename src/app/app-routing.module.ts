import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { CarritoComponent } from './carrito/carrito.component';
import {DetalleTransaccionesComponent} from './detalle-transacciones/detalle-transacciones.component';
import { HistorialComprasComponent} from './historial-compras/historial-compras.component';
import { InventarioGiftcardsComponent } from './inventario-giftcards/inventario-giftcards.component';
import {PerfilPersonalComponent} from './perfil-personal/perfil-personal.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {VerCatalogoComponent} from './ver-catalogo/ver-catalogo.component';
import { RegalarGiftcardsComponent } from './regalar-giftcards/regalar-giftcards.component';

const routes: Routes = [
    // {path:"", redirectTo:"historial-compras", pathMatch:"full"},
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'transacciones', component: DetalleTransaccionesComponent},
  {path: 'historial-compras',  component: HistorialComprasComponent},
  {path: 'inventario', component: InventarioGiftcardsComponent},
  {path: 'perfil-personal',component: PerfilPersonalComponent},
  {path: 'catalogo',component: VerCatalogoComponent},
  {path: 'login',component: LoginComponent},
  {path: 'registro',component: RegistroComponent},
  {path: "regalar-giftcards",component:RegalarGiftcardsComponent},
  {path: '*',component: LoginComponent},
  {path: '**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  
 }
