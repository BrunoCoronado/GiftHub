import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistorialComprasComponent} from './historial-compras/historial-compras.component'
import { InventarioGiftcardsComponent } from './inventario-giftcards/inventario-giftcards.component';


const routes: Routes = [
  {path:"", redirectTo:"historial-compras", pathMatch:"full"},
  { path:"historial-compras",  component:HistorialComprasComponent},
  {path:"inventario", component: InventarioGiftcardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
