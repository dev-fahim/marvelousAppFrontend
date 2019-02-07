import { TestBed } from '@angular/core/testing';

import { LoanGivingRecieveService } from './loan-giving-recieve.service';

describe('LoanGivingRecieveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanGivingRecieveService = TestBed.get(LoanGivingRecieveService);
    expect(service).toBeTruthy();
  });
});
