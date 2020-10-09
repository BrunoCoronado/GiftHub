import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-transacciones',
  templateUrl: './detalle-transacciones.component.html',
  styleUrls: ['./detalle-transacciones.component.css']
})
export class DetalleTransaccionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getTransacciones() {
    let transacciones = [];
    return transacciones;
  }
}
