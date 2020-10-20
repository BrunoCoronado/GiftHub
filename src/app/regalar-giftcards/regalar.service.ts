import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Giftcard } from "./giftcard";

@Injectable({
  providedIn: "root",
})
export class RegalarService {

  constructor(
    private firestore?: AngularFirestore
  ) {}

  getGiftCards() {
    let usersCollection: AngularFirestoreCollection<Giftcard>;
    let array: Giftcard [] = [];

    return this.firestore.collection('giftcard').snapshotChanges();
    return array;
  }


}
