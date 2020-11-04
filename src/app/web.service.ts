import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { giftCard, carritoTienda } from './tienda/tienda.component';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { map, first } from 'rxjs/operators';

import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root',
})
export class WebService {
  usuarioid: string;
 


  constructor(
    private localStorage?: LocalStorageService,
    private afAuth?: AngularFireAuth,
    private firestore?: AngularFirestore,
    private router?: Router,
  ) {
   /* if (afAuth) {
      this.afAuth.authState.subscribe((auth) => {
        if (auth) {
          this.usuarioid = auth.uid;
        }
      });
    }*/
  }

  identificadoresTarjetas: string[] = [];

  getUsuarios() {
    console.log(this.firestore.collection('usuario'));
  }

  public insertarTarjetas(tarjetas: giftCard[]): boolean {
    return true;
  }

  public async insertarTransaccion(carrito: carritoTienda): Promise<any> {
    await this.generarIdentificadores(carrito);

    //alert('UID: ' + JSON.parse(localStorage.getItem('Usuario')).id);

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('transaccion')
        .add({
          Estado: carrito.estado,
          Fecha: firebase.firestore.FieldValue.serverTimestamp(),
          Giftcards: this.identificadoresTarjetas,
          Tarjeta: carrito.tarjeta,
          Total: carrito.dolares ? '$' + carrito.total: 'Q' + carrito.total,
          nombre_tarjeta: carrito.nombre_tarjeta,
          vencimiento_tarjeta: carrito.vencimiento_tarjeta,
          uid: JSON.parse(localStorage.getItem('Usuario')).id
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
        this.firestore.collection('giftcard').add({
          codigo: this.identificadoresTarjetas[x],
          image: aux_tarjeta.image,
          name: aux_tarjeta.name,
          valor: aux_tarjeta.value,
          id_api: aux_tarjeta.id,
          uid: JSON.parse(localStorage.getItem('Usuario')).id,
        });
        x++;
      }
    }
  }

  getUsuario() {
    return this.getCurrentUser().then(function (firebaseUser) {
      return firebaseUser;
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

  async register(email: string, password: string, data: any): Promise<Object> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user);

      this.firestore.collection('usuario').add(data);

      //await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error ->', error);
      return;
    }
  }

  async login(email: string, password: string): Promise<Object> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      //this.updateUserData(user);
      //this.presentAlert();

      if (user) {
        let usr = this.firestore.collection('usuario', (ref) =>
          ref.where('correo', '==', email)
        );
        usr.snapshotChanges().forEach((a) => {
          a.forEach((item) => {
            /*
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).nombres)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).apellidos)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).dpi)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).correo)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).edad)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).usuario)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).password)
            console.log(JSON.parse(JSON.stringify(item.payload.doc.data())).rol)
            */
            //cursos.push({carnetEstudiante: item.payload.doc.data().carnetEstudiante, cursosAprobados:item.payload.doc.data().cursosAprobados});
            
            this.usuarioid=item.payload.doc.id;
            console.log('id',item.payload.doc.id)
            const data = {
              id: item.payload.doc.id,
              nombres: JSON.parse(JSON.stringify(item.payload.doc.data())).nombres,
              apellidos: JSON.parse(JSON.stringify(item.payload.doc.data())).apellidos,
              dpi: JSON.parse(JSON.stringify(item.payload.doc.data())).dpi,
              correo: JSON.parse(JSON.stringify(item.payload.doc.data()))
                .correo,
              edad: JSON.parse(JSON.stringify(item.payload.doc.data())).edad,
              usuario: JSON.parse(JSON.stringify(item.payload.doc.data()))
                .usuario,
              password: JSON.parse(JSON.stringify(item.payload.doc.data()))
                .password,
              rol: JSON.parse(JSON.stringify(item.payload.doc.data())).rol,
            };

            localStorage.setItem('Usuario', JSON.stringify(data));

              if(data.rol=="cliente"){
                this.router.navigate([ '/tienda' ]); 
              }else if (data.rol=="administrador"){
                this.router.navigate([ '/transacciones']); 
              }

          });
        });
      }

      return user;
    } catch (error) {
      console.log('Error ->', error);
    }
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `usuario/${user.uid}`
    );
    const data: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }
}
