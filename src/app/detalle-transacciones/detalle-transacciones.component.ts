import { Component, OnInit } from '@angular/core';
import { TransaccionesserviceService } from './transaccionesservice.service'
@Component({
  selector: 'app-detalle-transacciones',
  templateUrl: './detalle-transacciones.component.html',
  styleUrls: ['./detalle-transacciones.component.css']
})
export class DetalleTransaccionesComponent implements OnInit {
  clientesService: TransaccionesserviceService;
  constructor(clientesService: TransaccionesserviceService) {
    this.clientesService = clientesService;
  }
  public transacciones = [];
  public array2 = [];
  ngOnInit(): void {

    //console.log("Las Transacciones SON : \n")
   // this.casteoTransaccion();

   //este metodo imprime las transacciones, falta meterlo a un arreglo y crear objetos
    this.transacciones=this.clientesService.gettransaccionesdetalladas();
    console.log(this.transacciones.length)
    //console.log(this.transacciones)
  }

  public getTransacciones() {
    let transacciones = [];

    //transacciones = this.clientesService.getTransacciones();
    return transacciones;
  }

  public casteoTransaccion() {

    this.clientesService.getusuarios().subscribe(async (catsSnapshot) => {



    /*  catsSnapshot.forEach(async doc => {
        console.log("Parent Document ID: ", doc.payload.doc.id);
        let subCollectionDocs = await catsSnapshot(doc.payload.doc.id).collection("transaccion").get()
        subCollectionDocs.forEach(subCollectionDoc => {
          subCollectionDoc.forEach(doc => {
            console.log("Sub Document ID: ", doc.id);
          })
   });*/

      console.log(catsSnapshot)
      for (let i = 0; i < catsSnapshot.length; i++) {
        console.log("ENTRE AL FOR " + i)
        console.log(catsSnapshot[i].payload.doc)

      //  let subCollectionDocs = await catsSnapshot[i].payload.doc.collection("transaccion").get()
      
        this.array2.push(catsSnapshot[i].payload.doc.data())
      }
      console.log("ENTRE A CASTEO y el array 2 es "+this.array2[0])
      this.transacciones = [];
      catsSnapshot.forEach((TransData: any) => {
        // console.log("ENTRE A FOR")
        this.transacciones.push({
          id: TransData.payload.doc.id,
          estado: TransData.payload.doc.Estado,
          fecha: TransData.payload.doc.Fecha,
          Gifcards: TransData.payload.doc.Gifcards,
          tarjeta: TransData.payload.doc.Tarjeta,
          total: TransData.payload.doc.Total

        });
      })
    });
    //console.log("EL ARRAY ES " + this.transacciones[0]);
    return this.transacciones;
  }
}
