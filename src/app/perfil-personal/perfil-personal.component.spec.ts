import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPersonalComponent } from './perfil-personal.component';

describe('PerfilPersonalComponent', () => {
  let component: PerfilPersonalComponent;
  let fixture: ComponentFixture<PerfilPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Prueba password false', () => {
    expect(component.noVacio("")).toBe(false)
  });

  it('Prueba password true', () => {
    expect(component.noVacio("Kevin Garcia")).toBe(true)
  });

  it('Prueba Simular Login', () => {
    expect(component.SimularLogin()).toBeTrue()
  });

  it('Prueba Check Password false', () => {
    expect(component.checkPassword("pr")).toBeFalse()
  });

  it('Prueba Check Password true', () => {
    expect(component.checkPassword("kevin_garcia$")).toBeTrue()
  });

  it('Prueba Check Name true', () => {
    expect(component.checkName("kevin_garcia$")).toBeTrue()
  });

  it('Prueba Check Name false', () => {
    expect(component.checkName("")).toBeFalse()
  });

  it('Prueba Check Email true', () => {
    expect(component.checkEmail("kevin@gmail.com")).toBe(false)
  });

  it('Prueba Check Email false', () => {
    expect(component.checkEmail("kevin")).toBe(false)
  });
  
  

});
