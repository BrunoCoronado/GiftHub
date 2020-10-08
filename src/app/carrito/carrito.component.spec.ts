import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;
  
  beforeEach(() => {
    component = new CarritoComponent();
  });

  afterEach(() => {
    component = null;
  });

  it('Recuperar carrito del localStorage', () => {
    expect(component.getCarrito()).not.toBeNull();
  });

});
