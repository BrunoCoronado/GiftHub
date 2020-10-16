import { Component, OnInit } from '@angular/core';
import { carritoTienda } from '../tienda/tienda.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  tasaCambio = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getCarrito(): carritoTienda {
    return  (JSON.parse(localStorage.getItem('carritoTienda')) as carritoTienda);
  }

  public eliminarCarrito(): boolean {
    return true;
  }

  public modificarCarrito(id_tarjeta, cantidad): boolean {
    return true;
  }

  public getTasaCambio() {
    this.http
    .get<any>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio')
    .subscribe((data) => {
      this.tasaCambio = data[0].total;
      console.log('>> Tasa de cambio: ' + data[0].total);
    });
  }

}
