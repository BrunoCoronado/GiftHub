import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { DetalleTransaccionesComponent } from './detalle-transacciones.component';
import { BehaviorSubject } from 'rxjs';
describe('DetalleTransaccionesComponent', () => {
  let component: DetalleTransaccionesComponent;

  beforeEach(()=>{
    //router=new MockedRouter();
    component=new DetalleTransaccionesComponent();
  });

  afterEach(()=>{
    component=null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //prueba para obtener transacciones
  it('Recuperar las transacciones desde firebase', () => {
    expect(component.getTransaccionestodos()).not.toBeNull();
  });

  //prueba para obtener transacciones
  /*  it('Recuperar las transacciones casteadas desde firebase', () => {
      expect(component.Trasaccionescasteadas()).not.toBeNull();
    });*/


  //prueba para obtener transacciones
  it('Metodo para validar cantidad de transacciones', () => {
    let a = component.transacciones.length;
    let c = false;

    if (a > 0) {
      c = true
    }

    expect(c).toBeFalse();

    //  expect(component.clientesService.gettransaccionesdetalladas()).not.toBeNull();
  });
});
