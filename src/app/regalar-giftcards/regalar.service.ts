import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { User } from '../perfil-personal/user';
import { Giftcard } from "./giftcard";

@Injectable({
  providedIn: "root",
})
export class RegalarService {

  constructor(
    private firestore?: AngularFirestore
  ) {}

  getUsuarios() {
    let usersCollection: AngularFirestoreCollection<User>;
    let usuarios: User [] = [];

    return this.firestore.collection('usuario').snapshotChanges();
    return usuarios;
  }

  getGiftCards() {
    let usersCollection: AngularFirestoreCollection<Giftcard>;
    let array: Giftcard [] = [];

    return this.firestore.collection('giftcard').snapshotChanges();
    return array;
  }

  updateGiftcard(gift: Giftcard, id: string) {
    return this.firestore.collection("giftcard").doc(id).update(gift);
  }

}
