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
  tarjeta:string = '';

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar
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

  pagarTarjeta(){
    console.log(this.cifrarTarjeta(this.tarjeta));
  }
}

