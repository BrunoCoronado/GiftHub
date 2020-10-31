import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltarjetaComponent } from './modaltarjeta.component';

describe('ModaltarjetaComponent', () => {
  let component: ModaltarjetaComponent;
  let fixture: ComponentFixture<ModaltarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
