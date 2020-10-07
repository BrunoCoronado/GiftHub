import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
//import { stringify } from 'querystring';


Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export {
  TiendaComponent,
  carritoTienda,
  giftCard
}

class TiendaComponent {

  /*isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );*/

  constructor(private breakpointObserver?: BreakpointObserver) {}
  
  public getCards() {
    let giftcards = [];
    return giftcards;
  }

  public getValues() {
    let values = [];
    return values;
  }

  public getValue(id: number):number {
    return id;
  }

  public getTasa():number {
    let tasaCambio = 0;
    return tasaCambio;
  }

  public encriptarTarjeta(tarjeta:string):string {
    return tarjeta;
  }

  public agregarTarjeta():boolean {
    return true;
  }

}


class carritoTienda {

  public giftCards: giftCard[];

  constructor() {
    this.giftCards = [];
  }

  public insertarCard(tarjeta: giftCard): boolean {
    return true;
  }

  public eliminarCard(id: number): boolean {
    return true;
  }

  public actualizarCard(id: number, cantidad: number): boolean {
    return true;
  }

  public vaciar() {}

  public getTotal(): number {
    return 0;
  }

}

class giftCard {

  public id: number;
  public name: string;
  public image: string;
  public chargeRate: number;
  public value: number;
  public cantidad: number;

  constructor(id:number, name:string, image:string, chargeRate: number, value: number, cantidad: number){
      this.id = id;
      this.name = name;
      this.image = image;
      this.chargeRate = chargeRate;
      this.value = value;
      this.cantidad = cantidad;
  }

}