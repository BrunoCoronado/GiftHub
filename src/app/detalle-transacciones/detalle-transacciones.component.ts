import { Component, OnInit } from '@angular/core';
import {TransaccionesserviceService} from './transaccionesservice.service'
@Component({
  selector: 'app-detalle-transacciones',
  templateUrl: './detalle-transacciones.component.html',
  styleUrls: ['./detalle-transacciones.component.css']
})
export class DetalleTransaccionesComponent implements OnInit {
  clientesService: TransaccionesserviceService;
  constructor(clientesService:TransaccionesserviceService) {
    this.clientesService = clientesService;
  }
  public transacciones = [];
  ngOnInit(): void {
  
console.log("Las Transacciones SON : \n")
console.log(this.transacciones)
  }

  public getTransacciones() {
    let transacciones = [];

    transacciones=this.clientesService.getTransacciones();
    return transacciones;
  }

  public casteoTransaccion(){

    this.clientesService.getTransacciones2().subscribe((catsSnapshot) => {
      this.transacciones = [];
      catsSnapshot.forEach((TransData: any) => {
        this.transacciones.push({
          id:TransData.payload.doc.id,
          estado: TransData.payload.doc.Estado,
          fecha: TransData.payload.doc.Fecha,
          Gifcards: TransData.payload.doc.Gifcards,
          tarjeta: TransData.payload.doc.Tarjeta,
          total: TransData.payload.doc.Total
  
        });
      })
    });
  
    return this.transacciones;
  }
}
