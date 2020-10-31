import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCatalogoComponent } from './ver-catalogo.component';

describe('VerCatalogoComponent', () => {
  let component: VerCatalogoComponent;

  beforeEach(()=>{
    //router=new MockedRouter();
    component=new VerCatalogoComponent();
  });

  afterEach(()=>{
    component=null;
  });



  //prueba para obtener catalogo
  it('Recuperar el catalogo desde la API', () => {
    expect(component.getCatalogo()).not.toBeNull();
  });

});

