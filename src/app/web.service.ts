import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private firestore: AngularFirestore) { 
    
  }

  getUsuarios(){
    console.log(this.firestore.collection('usuario'))
  }
}
