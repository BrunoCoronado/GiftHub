import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { giftCard, carritoTienda } from './tienda/tienda.component';

import { map,first } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';
@Injectable({
  providedIn: 'root',
})
export class WebService {
  constructor(private localStorage: LocalStorageService, private afAuth?: AngularFireAuth, private firestore?: AngularFirestore) { }

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

  async register(email: string, password: string, data: any): Promise<Object> {
    try {

      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      
      console.log(user)

      this.firestore.collection('usuario').add(data)

      //await this.sendVerificationEmail();
      return user;
    } catch (error) { console.log('Error ->', error); return;}
  }

  async login(email: string, password: string): Promise<Object> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      //this.presentAlert();

      if(user){
        let usr = this.firestore.collection("usuario", (ref) =>
          ref.where("correo", "==", email)
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
            const data = {
              nombres: JSON.parse(JSON.stringify(item.payload.doc.data())).nombres,
              apellidos: JSON.parse(JSON.stringify(item.payload.doc.data())).apellidos,
              dpi: JSON.parse(JSON.stringify(item.payload.doc.data())).dpi,
              correo: JSON.parse(JSON.stringify(item.payload.doc.data())).correo,
              edad: JSON.parse(JSON.stringify(item.payload.doc.data())).edad,
              usuario: JSON.parse(JSON.stringify(item.payload.doc.data())).usuario,
              password: JSON.parse(JSON.stringify(item.payload.doc.data())).password,
              rol: JSON.parse(JSON.stringify(item.payload.doc.data())).rol,
            }

            localStorage.setItem("Usuario", JSON.stringify(data))

          });
        });
      }


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
