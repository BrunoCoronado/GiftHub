import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  host: string = 'postgres://gavjhhul:eZw3Xn3hNNtLg50q13LIlbeoBjBbhfUE@otto.db.elephantsql.com:5432/gavjhhul'
  usuario: string = 'gavjhhul'
  contraseña: string = 'eZw3Xn3hNNtLg50q13LIlbeoBjBbhfUE'
  
  /**Endpoints mantenimiento PACIENTE*/

  async obtenerPacientes(){
    return this.http.get(``).toPromise();
  }
}
