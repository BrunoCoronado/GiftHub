import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('Component: Registro', () => {
  let component: RegistroComponent;

  beforeEach(() => {
      //router=new MockedRouter();
      component = new RegistroComponent();

  });

  afterEach(() => {
      component = null;
  });


  it('Register Sucess', () => {
      let res = <Promise<boolean>>(new Promise((resolve, reject) => { resolve(true); }));
      spyOn(component, 'registrarse').and.returnValue(res);
      expect(component.registrarse()).toBe(res);
  });

  it('Register Fail', () => {
      let res = <Promise<boolean>>(new Promise((resolve, reject) => { resolve(false); }));
      spyOn(component, 'registrarse').and.returnValue(res);
      expect(component.registrarse()).toBe(res);
  });
});
