import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { map,first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private afAuth?: AngularFireAuth, private firestore?: AngularFirestore) { 
    
  }

  getUsuarios(){
    console.log(this.firestore.collection('usuario'))
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
    return this.firestore.collection('usuario').get();
  }
}
