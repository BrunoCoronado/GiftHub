import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map,first, flatMap } from 'rxjs/operators';
import {User} from './perfil-personal/user'
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private afAuth?: AngularFireAuth, private firestore?: AngularFirestore) { }

  getCurrentUser(){
    const user = this.isLoggedIn()
    if (user) {
      console.log('Está logueado!');
      return user;
    } else {
      console.log("No está logueado!");
      return undefined;
    }
  }

  getUserData(){

    let usersCollection: AngularFirestoreCollection<User>;
    let usuarios: User [] = [];

    return this.firestore.collection('usuario').snapshotChanges(); 
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

  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  updateUser(user: User, id: string){
    return this.firestore.collection("users").doc(id).update(user);
  }


  newUser(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("usuario")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  
  
}
