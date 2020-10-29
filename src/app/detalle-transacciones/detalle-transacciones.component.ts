import { Component, OnInit } from '@angular/core';
import { TransaccionesserviceService } from './transaccionesservice.service'
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-detalle-transacciones',
  templateUrl: './detalle-transacciones.component.html',
  styleUrls: ['./detalle-transacciones.component.css']
})
export class DetalleTransaccionesComponent implements OnInit {
  // clientesService: TransaccionesserviceService;
  constructor(private servicio: TransaccionesserviceService) {
    //   this.clientesService = servicio;
  }
  public transacciones = [];
  public array2 = [];
  dataSource = new MatTableDataSource<Element>(this.array2);
  displayedColumns = [
    'select',
    'id',
    'Estado',
    'Fecha',
    'Gifcards',
    'Tarjeta',
    'Total',
    'Nombre'
  ];
  ngOnInit(): void {

    //este metodo imprime las transacciones, falta meterlo a un arreglo y crear objetos
    // this.transacciones = this.clientesService.gettransaccionesdetalladas();
    console.log(this.transacciones.length)
    this.Trasaccionescasteadas()
    //console.log(this.transacciones)
  }

  public getTransaccionestodos() {
    let transacciones = [];
    return transacciones;
  }

  public Trasaccionescasteadas() {

    this.servicio.getTransaccionesbd().subscribe(async (catsSnapshot) => {

      console.log(catsSnapshot)
      for (let i = 0; i < catsSnapshot.length; i++) {
        console.log("ENTRE AL FOR " + i)
        console.log(catsSnapshot[i].payload.doc)


        this.array2.push(catsSnapshot[i].payload.doc.data())

      }
      console.log("EL NOMBRE DE LA PRIMER TRANSACCION FUE "+this.array2[0].nombre_tarjeta)

      /*   console.log("ENTRE A CASTEO y el array 2 es " + this.array2[0])
         this.transacciones = [];
         catsSnapshot.forEach((TransData: any) => {
            console.log("ENTRE A FOR")
            console.log("ESTADO DE ESTA ES "+ TransData.payload.doc.id)
           this.transacciones.push({
             id: TransData.payload.doc.id,
             estado: TransData.payload.doc.Estado,
             fecha: TransData.payload.doc.Fecha,
             Gifcards: TransData.payload.doc.Gifcards,
             tarjeta: TransData.payload.doc.Tarjeta,
             total: TransData.payload.doc.Total
   
           });
         })*/
    });
    return this.transacciones;
  }
}
