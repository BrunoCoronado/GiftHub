import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { giftCard, carritoTienda } from './tienda/tienda.component';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(private firestore: AngularFirestore) {}

  getUsuarios() {
    console.log(this.firestore.collection('usuario'));
  }

  public insertarTarjetas(tarjetas: giftCard[]): boolean {
    return true;
  }

  public insertarTransaccion(carrito: carritoTienda): boolean {
    return true;
  }
}
