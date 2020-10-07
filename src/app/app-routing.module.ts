import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PerfilPersonalComponent} from './perfil-personal/perfil-personal.component'

const routes: Routes = [
  {
    path: "perfil-personal",
    component:PerfilPersonalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
