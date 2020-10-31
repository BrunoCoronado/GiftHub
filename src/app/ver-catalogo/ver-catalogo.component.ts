import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-catalogo',
  templateUrl: './ver-catalogo.component.html',
  styleUrls: ['./ver-catalogo.component.css']
})
export class VerCatalogoComponent implements OnInit {
  giftCards = [];
  values = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private http?: HttpClient, private _snackBar?: MatSnackBar) {}

  async ngOnInit() {
    await this.http
      .get<any>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/Card')
      .subscribe((data) => {
        this.giftCards = data;
        console.log(data);
      });

    await this.http
      .get<any>('https://my-json-server.typicode.com/CoffeePaw/AyD1API/Value')
      .subscribe((data) => {
        this.values = data;
        console.log(data);
      });
  }

  getCatalogo(){
    return this.giftCards;
  }

  gridColumns = 3;
  defaultElevation = 2;
  raisedElevation = 8;

  chipControl(tarjeta, valor) {
    let carrito = localStorage.getItem('carritoTienda');

    if (carrito) {
      let carroNuevo: carritoTienda = new carritoTienda();
      carroNuevo.giftCardsCarrito = (JSON.parse(
        carrito
      ) as carritoTienda).giftCardsCarrito;
      carroNuevo.insertarCard(
        new giftCard(
          tarjeta.id,
          tarjeta.name,
          tarjeta.image,
          tarjeta.chargeRate,
          valor,
          1
        )
      );
      console.log(carroNuevo);
      localStorage.setItem('carritoTienda', JSON.stringify(carroNuevo));
    } else {
      let carroNuevo: carritoTienda = new carritoTienda();
      carroNuevo.insertarCard(
        new giftCard(
          tarjeta.id,
          tarjeta.name,
          tarjeta.image,
          tarjeta.chargeRate,
          valor,
          1
        )
      );
      localStorage.setItem('carritoTienda', JSON.stringify(carroNuevo));
    }

    this._snackBar.open(
      'Tarjeta ' + tarjeta.name + ' de 💲' + valor + ' agregada al carrito 🛒',
      'Cerrar',
      {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
    );
  }

  public getCards() {
    let giftcards = [];
    return giftcards;
  }

  public getValues() {
    let values = [];
    return values;
  }

  public getValue(id: number): number {
    return id;
  }

  public getTasa(): number {
    let tasaCambio = 0;
    return tasaCambio;
  }

  public encriptarTarjeta(tarjeta: string): string {
    return tarjeta;
  }

  public agregarTarjeta(): boolean {
    return true;
  }
}

export class carritoTienda {

  tarjeta: string = '';
  estado: string = '';
  total: number = 0;
  nombre_tarjeta: string = '';
  public giftCardsCarrito: giftCard[] = [];

  constructor() {}

  public insertarCard(tarjeta: giftCard): boolean {
    for (let aux_tarjeta of this.giftCardsCarrito) {
      if (aux_tarjeta.id == tarjeta.id && aux_tarjeta.value == tarjeta.value) {
        aux_tarjeta.cantidad++;
        aux_tarjeta.subtotal +=
          aux_tarjeta.value*1 + aux_tarjeta.chargeRate*1;
        return true;
      }
    }

    this.giftCardsCarrito.push(tarjeta);
    return true;
  }

  public eliminarCard(i: number): boolean {
    if (i < 0) {
      return false;
    }
    this.giftCardsCarrito.splice(i, 1);
    return true;
  }

  public actualizarCard(id: number, cantidad: number): boolean {
    return true;
  }

  public vaciar() {}

  public getTotal(): number {
    return this.total;
  }

  public setTotal(total:number){
    this.total = total;
  }
}

export class giftCard {
  public id: number;
  public name: string;
  public image: string;
  public chargeRate: number;
  public value: number;
  public cantidad: number;
  public subtotal: number;

  constructor(
    id: number,
    name: string,
    image: string,
    chargeRate: number,
    value: number,
    cantidad: number
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.chargeRate = chargeRate;
    this.value = value;
    this.cantidad = cantidad;
    this.subtotal = value*1 + chargeRate*1;
  }
}
