import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map, first, flatMap } from 'rxjs/operators';
import { User, Transaccion } from "./user";
@Injectable({
  providedIn: 'root'
})
export class TransaccionesserviceService {
  public transacciones = [];

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }
  
  public getTransaccionesbd() {
    return this.firestore.collection("transaccion").snapshotChanges();

  }

  public getusuarios() {
    return this.firestore.collection("usuario").snapshotChanges();

  }


  public gettransaccionesdetalladas() {
    // return this.firestore.collection("usuario").snapshotChanges();


    let documents = this.firestore.collection("usuario").get();

    documents.forEach(async doc => {
      console.log("Cantidad de documentos en la coleccion usuarip: ", doc.docs.length);

      for (let i = 0; i < doc.docs.length; i++) {
        let id = doc.docs[i].id
        console.log(doc.docs[i].id)
        //en el for recorro todos los documentos de la coleccion usuario y asigno el id de cada uno a la variable id
        //luego obtengo un documento especifico de la coleccion usando el id y luego obtengo la coleccion transaccion
        //luegro recorro la transaccion que es una coleccion de documentos y luego recorro esa coleccion
        let coleccion = this.firestore.collection("usuario").doc(id).collection("transaccion").get();

        console.log("LA COLECCION ES " + coleccion)


        coleccion.forEach(subCollectionDoc => {

          subCollectionDoc.forEach(doc => {
            console.log("Sub Document ID: ", doc.id);
            console.log("Sub Document estado: ", doc.data().Estado);

            //parte para meterlo a array
            this.transacciones.push({
              id: doc.id,
              estado: doc.data().Estado,
              fecha: doc.data().Fecha,
              Gifcards: doc.data().Gifcards,
              tarjeta: doc.data().Tarjeta,
              total: doc.data().Total

            });


          })

        });


      }

      //fin
    });
    return this.transacciones;
  }


  /*
    public getusuarios2() {
      //return this.firestore.collection("usuario").doc("id").collection("transacciones");
  
      this.firestore.collection('BD_Canciones').doc("id") .collection('transaccion').onSnapsnapshotChangesshot((snapshotChange) => {
          this.data = [];
              snapshotChange.forEach((doc) => {                     
                  this.data.push({
                      key: doc.id,                         
                      name: doc.data().name,
                      type: doc.data().type,
                      compases: doc.data().amount,
                      ....
                  })
     
              });
      })
  
    }
  */
  public getTransacciones() {
    return this.transacciones;

  }
  //Obtiene todos los gatos
  public casteoTransaccion() {
    //return 

    let transacciones: Transaccion[] = [];
    return transacciones;
    //Actual



  }
}

