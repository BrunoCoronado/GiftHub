import { TestBed } from '@angular/core/testing';

import { TransaccionesserviceService } from './transaccionesservice.service';

describe('TransaccionesserviceService', () => {
  let service: TransaccionesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransaccionesserviceService);
  });
/*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */
});
