import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map,first, flatMap } from 'rxjs/operators';
import { User,Transaccion } from "./user";
@Injectable({
  providedIn: 'root'
})
export class TransaccionesserviceService {
  public transacciones = [];
  constructor(private afAuth?: AngularFireAuth, private firestore?: AngularFirestore) { }
  public getTransacciones2() {
return this.firestore.collection('transaccion').snapshotChanges();

  }

  public getTransacciones() {
    return this.transacciones;
    
      }
 //Obtiene todos los gatos
/* public casteoTransaccion() {
  //return 
  
  let transacciones: Transaccion [] = [];

 this.getTransacciones().forEach( a => {
    a.forEach( item => {
      var obj=item.payload.doc.data();

      transacciones.push(
        {
          id:obj.id;
          estado: obj.Estado;
          fecha: string;
          Gifcards: [];
          tarjeta: string;
          total: number;
        });
    });
  });
  console.log("asdasdasdas")
  console.log(usuarios)
  return usuarios;
}*/
//Actual



}


 /*public getData(){

    let usersCollection: AngularFirestoreCollection<User>;
    let usuarios: User [] = [];

   // return this.firestore.collection('usuario').snapshotChanges(); 
    usersCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        var obj=item.payload.doc.data();

        usuarios.push(
          {
            id: obj.id,
            usuario:obj.usuario,
            nombres:obj.nombres,
            apellidos:obj.apellidos,
            correo:obj.correo,
            password:obj.password,
            dpi:obj.dpi,
            edad:obj.edad,
            rol:obj.rol
          });
      });
    });
    console.log("asdasdasdas")
    console.log(usuarios)
    return usuarios;
   /* usersCollection.snapshotChanges().forEach( a => {
      a.forEach( item => {
        var obj=item.payload.doc.data();

        usuarios.push(
          {
            id: obj.id,
            usuario:obj.usuario,
            nombres:obj.nombres,
            apellidos:obj.apellidos,
            correo:obj.correo,
            password:obj.password,
            dpi:obj.dpi,
            edad:obj.edad,
            rol:obj.rol
          });
      });
    });
    console.log("asdasdasdas")
    console.log(usuarios)
    return usuarios;

  }*/

