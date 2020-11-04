import { TestBed } from '@angular/core/testing';

import { WebService } from './web.service';

describe('Service: WebService', () => {
  let service: WebService;

  beforeEach(() => {
    //router=new MockedRouter();
    service = new WebService();
  });

  afterEach(() => {
    service = null;
  });

  it('Generación Alfanumérico para Giftcard', () => {
    expect(service.generarIdentificador().length>7).toBeTruthy();
  });
});
