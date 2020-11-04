import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { carritoTienda } from '../tienda/tienda.component';

import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;
  
  beforeEach(() => {
    component = new CarritoComponent();
    localStorage.setItem('carritoTienda', JSON.stringify(new carritoTienda()));
  });

  afterEach(() => {
    component = null;
  });

  it('Recuperar carrito del localStorage', () => {
    expect(component.getCarrito()).not.toBeNull();
  });

  it('Eliminar carrito del localStorage', () => {
    expect(component.eliminarCarrito()).toBeTruthy();
  });

  it('Modificar cantidad carrito', () => {
    expect(component.modificarCarrito(1, 2)).toBeTruthy();
  });

  it('Compra Success',()=>{
    spyOn(component, 'pagarTarjeta').and.callFake((moneda)=>{
      return true;
    });
    expect(component.pagarTarjeta(true)).toBeTruthy();
  });

  it('Compra fail',()=>{
    spyOn(component, 'pagarTarjeta').and.callFake((moneda)=>{
      return false;
    });
    expect(component.pagarTarjeta(true)).toBeFalse();
  });

  it('Cifrado de numero de tarjeta', () => {
    let res=component.cifrarTarjeta('12341234567891011');
    expect(res.charAt(0)).toBe('X');
  });

  it('Objeto simulado: Tasa de cambio',()=>{
    spyOn(component, 'getTasaCambio').and.returnValue(7.66);
    expect(component.getTasaCambio()).toBe(7.66);
  });







});
