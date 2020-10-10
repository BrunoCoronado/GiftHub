import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map, first, flatMap } from "rxjs/operators";
import { User } from "./perfil-personal/user";
@Injectable({
  providedIn: "root",
})
export class PersonalService {
  constructor(
    private afAuth?: AngularFireAuth,
    private firestore?: AngularFirestore
  ) {}

  /*getCurrentUser(){
    const user = this.isLoggedIn()
    if (user) {
      console.log('Está logueado!');
      return user;
    } else {
      console.log("No está logueado!");
      return undefined;
    }
  }

  

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  */

  getUserData() {
    let usersCollection: AngularFirestoreCollection<User>;
    let usuarios: User [] = [];

    return this.firestore.collection('usuario').snapshotChanges();
    return usuarios;
  }

  updateUser(user: User, id: string) {
    return this.firestore.collection("users").doc(id).update(user);
  }

  newUser(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("usuario")
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }
}
