import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { giftCard, carritoTienda } from './tienda/tienda.component';

import { map,first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(private afAuth?: AngularFireAuth, private firestore?: AngularFirestore) { }

  getUsuarios() {
    console.log(this.firestore.collection('usuario'));
  }

  public insertarTarjetas(tarjetas: giftCard[]): boolean {
    return true;
  }

  public insertarTransaccion(carrito: carritoTienda): boolean {
    return true;
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getCurrentUser(){
    const user = this.isLoggedIn()
    if (user) {
      // do something
      console.log('está dentro!');
      return user;
    } else {
      // do something else
      console.log("no hay nadie dentro!");
      return undefined;
    }
  }
  getUserTransactions(user:string){
    return this.firestore.collection('usuario').doc('id').collection('transaccion');
  }

  async register(email: string, password: string): Promise<Object> {
    try {

      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      console.log(user)

      //await this.sendVerificationEmail();
      return user;
    } catch (error) { console.log('Error ->', error); return;}
  }

  async login(email: string, password: string): Promise<Object> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      //this.presentAlert();
      return user;
    } catch (error) {
      console.log('Error ->', error);
    }
  }

  private updateUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    const data: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true });
  }


}
