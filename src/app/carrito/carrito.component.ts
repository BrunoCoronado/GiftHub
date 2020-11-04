import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { carritoTienda, giftCard } from '../tienda/tienda.component';
import { HttpClient } from '@angular/common/http';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

import { WebService } from '../web.service';
import { Router } from '@angular/router';

const ELEMENT_DATA: giftCard[] = [];

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  carrito: carritoTienda;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  tarjeta: string = '';
  nombre_tarjeta: string = '';
  vencimiento_tarjeta: string = '';

  constructor(
    private _formBuilder?: FormBuilder,
    private http?: HttpClient,
    private _snackBar?: MatSnackBar,
    private servicio?: WebService,
    private router?: Router,
  ) {}

  displayedColumns = [
    'select',
    'id',
    'name',
    'value',
    'chargeRate',
    'cantidad',
    'subtotal',
  ];
  data = Object.assign(ELEMENT_DATA);
  dataSource = new MatTableDataSource<Element>(this.data);
  selection = new SelectionModel<Element>(true, []);
  preciodolares = 0;
  precioquet = 0;
  tasaCambio = 0;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });

    let carrito = localStorage.getItem('carritoTienda');

    if (carrito) {
      let carroNuevo: carritoTienda = new carritoTienda();
      carroNuevo.giftCardsCarrito = (JSON.parse(
        carrito
      ) as carritoTienda).giftCardsCarrito;
      this.data = carroNuevo.giftCardsCarrito;
      this.dataSource = new MatTableDataSource<Element>(this.data);
      console.log(carroNuevo);
      this.carrito = carroNuevo;
      //localStorage.setItem('carritoTienda', JSON.stringify(carroNuevo));
    }

    this.tarjeta = '';
    this.nombre_tarjeta = '';
    this.getTasaCambio();
  }

  calcularTotales(tasa) {
    let totaldolar = 0;

    for (let fila of this.data) {
      totaldolar += fila.subtotal;
    }

    this.preciodolares = totaldolar;
    this.precioquet = totaldolar * tasa;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    this.selection.selected.forEach((item) => {
      let index: number = this.data.findIndex((d) => d === item);
      console.log(this.data.findIndex((d) => d === item));
      this.data.splice(index, 1);
      this.dataSource = new MatTableDataSource<Element>(this.data);
      this.carrito.eliminarCard(index);
      localStorage.setItem('carritoTienda', JSON.stringify(this.carrito));
    });

    this.calcularTotales(this.tasaCambio);

    this.selection = new SelectionModel<Element>(true, []);
    this._snackBar.open(
      'Tarjetas eliminadas ❌ con éxito del carrito 🛒',
      'Cerrar',
      {
        duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
    );
  }

  public getCarrito(): carritoTienda {
    return JSON.parse(localStorage.getItem('carritoTienda')) as carritoTienda;
  }

  public eliminarCarrito(): boolean {
    return true;
  }

  public modificarCarrito(id_tarjeta, cantidad): boolean {
    return true;
  }

  public getTasaCambio() {
    this.http
      .get<any>(
        'https://my-json-server.typicode.com/CoffeePaw/AyD1API/TasaCambio'
      )
      .subscribe((data) => {
        this.tasaCambio = data[0].total;
        console.log('>> Tasa de cambio: ' + data[0].total);
        this.calcularTotales(this.tasaCambio);
      });
    return this.tasaCambio;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  public cifrarTarjeta(tarjeta: string): string {
    let tarjetaC = '';

    for (let i = 0; i < 16; i++) {
      tarjetaC += i < 4 || i >= 12 ? 'X' : tarjeta[i];
    }

    return tarjetaC;
  }

  pagarTarjeta(moneda:boolean){
    if(this.carrito.giftCardsCarrito.length < 1 || this.precioquet == 0){
      this._snackBar.open(
        'No hay giftcards en el carrito ❌',
        'Cerrar',
        {
          duration: 3000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        }
      );
      return false;
    }

    this.carrito.tarjeta = this.cifrarTarjeta(this.tarjeta);
    this.carrito.nombre_tarjeta = this.nombre_tarjeta;
    this.carrito.estado = 'Exitoso';
    this.carrito.vencimiento_tarjeta = this.vencimiento_tarjeta;
    this.carrito.total = moneda ? this.preciodolares:this.precioquet;
    this.carrito.dolares = moneda;
    

    console.log(this.carrito);

    console.log(this.servicio.insertarTransaccion(this.carrito));
    this.servicio.insertarGiftCards(this.carrito);

    this._snackBar.open(
      'Compra realizada con éxito ✔️',
      'Cerrar',
      {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      }
    );

    this.nombre_tarjeta = '';
    this.tarjeta = '';
    this.carrito =  null;
    this.preciodolares = 0;
    this.precioquet = 0;

    localStorage.removeItem('carritoTienda');
    this.router.navigate(['tienda']);
    return true;
  }
}

