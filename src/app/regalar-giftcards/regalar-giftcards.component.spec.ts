import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegalarGiftcardsComponent } from './regalar-giftcards.component';

describe('RegalarGiftcardsComponent', () => {
  let component: RegalarGiftcardsComponent;
  let fixture: ComponentFixture<RegalarGiftcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegalarGiftcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegalarGiftcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
