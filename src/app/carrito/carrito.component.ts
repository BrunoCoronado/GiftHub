import { Component, OnInit } from '@angular/core';
import { carritoTienda } from '../tienda/tienda.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getCarrito(): carritoTienda {
    return new carritoTienda();
  }

  public eliminarCarrito(): boolean {
    return true;
  }

  public modificarCarrito(id_tarjeta, cantidad): boolean {
    return true;
  }

}
