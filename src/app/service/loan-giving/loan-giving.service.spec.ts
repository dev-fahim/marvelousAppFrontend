import { TestBed } from '@angular/core/testing';

import { LoanGivingService } from './loan-giving.service';

describe('LoanGivingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanGivingService = TestBed.get(LoanGivingService);
    expect(service).toBeTruthy();
  });
});
