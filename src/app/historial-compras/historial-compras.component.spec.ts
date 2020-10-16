import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

import { HistorialComprasComponent } from './historial-compras.component';

describe('HistorialComprasComponent', () => {
  let component: HistorialComprasComponent;
  let fixture: ComponentFixture<HistorialComprasComponent>;
  //usando un STUB
  //referencia: https://github.com/angular/angularfire/issues/1706
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialComprasComponent ],
      providers: [{ provide: AngularFirestore, useValue: FirestoreStub },]
    })
    .compileComponents();
  }));
  it('debe estar vacio', ()=>{
    const expected=[];
    const result=HistorialComprasComponent.getHistorial();
    expect(result).toEqual(expected);
  });
});
