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

});
