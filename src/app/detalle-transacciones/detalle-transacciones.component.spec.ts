import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTransaccionesComponent } from './detalle-transacciones.component';

describe('DetalleTransaccionesComponent', () => {
  let component: DetalleTransaccionesComponent;
  let fixture: ComponentFixture<DetalleTransaccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleTransaccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleTransaccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //prueba para obtener transacciones
    it('Recuperar las transacciones desde firebase', () => {
      expect(component.getTransacciones()).not.toBeNull();
    });

      //prueba para obtener transacciones
      it('Recuperar las transacciones casteadas desde firebase', () => {
        expect(component.casteoTransaccion()).not.toBeNull();
      });
});
