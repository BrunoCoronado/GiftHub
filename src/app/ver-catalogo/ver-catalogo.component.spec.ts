import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCatalogoComponent } from './ver-catalogo.component';

describe('VerCatalogoComponent', () => {
  let component: VerCatalogoComponent;
  let fixture: ComponentFixture<VerCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //prueba para obtener catalogo
  it('Recuperar el catalogo desde la API', () => {
    expect(component.getCatalogo()).not.toBeNull();
  });

});

