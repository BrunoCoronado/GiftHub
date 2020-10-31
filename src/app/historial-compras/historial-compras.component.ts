import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transferencia } from '../detalle-transacciones/detalle-transacciones.component';
import { TransaccionesserviceService } from '../detalle-transacciones/transaccionesservice.service';
import { WebService } from '../web.service';


const ELEMENT_DATA: Transferencia[] = [];
@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  public transacciones = [];

  constructor(private webService: WebService, private servicio?: TransaccionesserviceService) { }

  ngOnInit() {
    this.obtenerTransacciones();
  }




  async obtenerTransacciones() {
    let current = JSON.parse(localStorage.getItem("Usuario"));;
    this.servicio.getTransaccionesbd().subscribe((datos) => {
      for (let index = 0; index < datos.length; index++) {
        const element = JSON.parse(JSON.stringify(datos[index].payload.doc.data()));
        if (element.uid == current.id) {
          element.Giftcards = element.Giftcards.length;
          element.Fecha= this.toDateTime(element.Fecha.seconds);
          this.transacciones.push(element);
        }

      }
    });
  }

  toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  }

  public static getHistorial() {
    return [];
  }

}
