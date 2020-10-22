import { TestBed } from '@angular/core/testing';

import { PersonalService } from './personal.service';

describe('PersonalService', () => {
  let service: PersonalService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalService);
  });
/*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */
/*
  it('Mock', () => {
    spy = spyOn(service, 'getUserData').and.returnValue(null); 
    expect(service.getUserData()).toBe(null);
  });
  */
});
