import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {

  let registro: RegistroComponent;

  beforeEach(() => {
    registro = new RegistroComponent();
  })

  it('Validar campos correctos', () => {
    expect(registro.validarCampos('campo1', 'campo2')).toBeTruthy();
  });

  it('Validar campos incorrectos', () => {
    expect(registro.validarCampos(undefined, undefined)).toBeFalsy();
  });  

  it('Validar campos incorrectos', () => {
    expect(registro.validarCampos('campo1', undefined)).toBeFalsy();
  });  
});
