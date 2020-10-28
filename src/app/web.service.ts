import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { giftCard, carritoTienda } from './tienda/tienda.component';
import * as firebase from 'firebase/app';

import { map, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(
    private afAuth?: AngularFireAuth,
    private firestore?: AngularFirestore
  ) {}

  identificadoresTarjetas: string[] = [];

  getUsuarios() {
    console.log(this.firestore.collection('usuario'));
  }

  public insertarTarjetas(tarjetas: giftCard[]): boolean {
    return true;
  }

  public async insertarTransaccion(carrito: carritoTienda): Promise<any> {
    await this.generarIdentificadores(carrito);

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('transaccion')
        .add({
          Estado: carrito.estado,
          Fecha: firebase.firestore.FieldValue.serverTimestamp(),
          Giftcards: this.identificadoresTarjetas,
          Tarjeta: carrito.tarjeta,
          Total: carrito.total,
          nombre_tarjeta: carrito.nombre_tarjeta,
          //uid: this.getUsuario(),
        })
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  public insertarGiftCards(carrito: carritoTienda) {
    
    var x = 0;

    for (let aux_tarjeta of carrito.giftCardsCarrito) {
      for (var i = 0; i < aux_tarjeta.cantidad; i++) {
        this.firestore
          .collection('giftcard')
          .add({
            codigo: this.identificadoresTarjetas[x],
            image: aux_tarjeta.image,
            name: aux_tarjeta.name,
            valor: aux_tarjeta.value,
            id_api: aux_tarjeta.id,
            //uid: this.getUsuario(),
          })
          x++;
      }
    }
  }

  getUsuario() {
    return this.getCurrentUser().then(function (firebaseUser) {
      return firebaseUser.uid;
    });
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  public generarIdentificadores(carrito: carritoTienda) {
    this.identificadoresTarjetas = [];

    for (let aux_tarjeta of carrito.giftCardsCarrito) {
      for (var i = 0; i < aux_tarjeta.cantidad; i++) {
        this.identificadoresTarjetas.push(this.generarIdentificador());
      }
    }
  }

  getCurrentUser() {
    const user = this.isLoggedIn();
    if (user) {
      // do something
      console.log('está dentro!');
      return user;
    } else {
      // do something else
      console.log('no hay nadie dentro!');
      return undefined;
    }
  }

  getUserTransactions(user: string) {
    return this.firestore
      .collection('usuario')
      .doc('id')
      .collection('transaccion');
  }

  generarIdentificador(): string {
    const chars =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var id: string = '';
    for (var i = 8; i > 0; --i)
      id += chars[Math.floor(Math.random() * chars.length)];
    return id;
  }
}
