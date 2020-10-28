import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerCatalogoComponent } from './ver-catalogo/ver-catalogo.component';
import { TiendaComponent } from './tienda/tienda.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CarritoComponent } from './carrito/carrito.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { DetalleTransaccionesComponent } from './detalle-transacciones/detalle-transacciones.component';
import { MatButtonModule } from '@angular/material/button';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { InventarioGiftcardsComponent } from './inventario-giftcards/inventario-giftcards.component';
import { PerfilPersonalComponent } from './perfil-personal/perfil-personal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VerCatalogoComponent,
    TiendaComponent,
    CarritoComponent,
    RegistroComponent,
    DetalleTransaccionesComponent,
    HistorialComprasComponent,
    InventarioGiftcardsComponent,
    PerfilPersonalComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatChipsModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
  ],
  providers: [AngularFirestore, AngularFirestore, AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
