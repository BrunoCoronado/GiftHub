import { TestBed } from '@angular/core/testing';

import { RegalarService } from './regalar.service';

describe('RegalarService', () => {
  let service: RegalarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegalarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
