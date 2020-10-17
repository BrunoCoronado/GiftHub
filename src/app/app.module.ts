import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { InventarioGiftcardsComponent } from './inventario-giftcards/inventario-giftcards.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComprasComponent,
    InventarioGiftcardsComponent
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
    
  ],
  providers: [
    AngularFirestore,
    AngularFirestore,
    AngularFireAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
