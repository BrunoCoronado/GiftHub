import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { DetalleTransaccionesComponent } from './detalle-transacciones.component';
import { BehaviorSubject } from 'rxjs';
describe('DetalleTransaccionesComponent', () => {
  let component: DetalleTransaccionesComponent;
  let fixture: ComponentFixture<DetalleTransaccionesComponent>;


  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleTransaccionesComponent],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub },]
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
