import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { carritoTienda, giftCard, TiendaComponent } from './tienda.component';
import { WebService } from '../web.service';

class WebServiceMocked {

  resultado = true;

  insertarTarjetas(){
    return this.resultado;
  }

  insertarTransaccion(){
    return this.resultado;
  }

}

describe('TiendaComponent', () => {
  let component: TiendaComponent;
  let fixture: ComponentFixture<TiendaComponent>;
  let carrito: carritoTienda;
  let webService: WebServiceMocked;

  beforeEach(() => {
    webService = new WebServiceMocked();
    carrito = new carritoTienda();
    component = new TiendaComponent();
  });

  afterEach(() =>{
    carrito = null;
    webService = null;
    component = null;
  });

  it('Recuperar las giftcards desde la API', () => {
    expect(component.getCards()).not.toBeNull();
  });

  it('Recuperar la tasa de cambio desde la API', () => {
    expect(component.getTasa()).not.toBeNull();
  });

  it('Recuperar los valores desde la API', () => {
    expect(component.getValues()).not.toBeNull();
  });

  it('Recuperar un valor especifico desde la API', () => {
    expect(component.getValue(0)).toBe(0);
  });

  it('Encriptar tarjeta sea string', () => {
    expect(component.encriptarTarjeta('1234123412341234')).toEqual(jasmine.any(String));
  });

  it('Encriptar tarjeta tenga 16 caracteres', () => {
    expect(component.encriptarTarjeta('1234123412341234').length).toBe(16);
  });
});
