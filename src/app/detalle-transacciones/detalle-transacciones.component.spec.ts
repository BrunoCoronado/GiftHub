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
});
