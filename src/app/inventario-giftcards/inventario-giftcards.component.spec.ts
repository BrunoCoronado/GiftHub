import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioGiftcardsComponent } from './inventario-giftcards.component';

describe('InventarioGiftcardsComponent', () => {
  let component: InventarioGiftcardsComponent;
  let fixture: ComponentFixture<InventarioGiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventarioGiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioGiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
