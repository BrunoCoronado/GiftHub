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



  it('Prueba password', () => {
    console.log("Pasa aquiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    expect(component.noVacio("")).toBe(true)
  });


});
