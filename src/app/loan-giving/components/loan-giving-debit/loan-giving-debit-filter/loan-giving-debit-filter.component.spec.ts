import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingDebitFilterComponent } from './loan-giving-debit-filter.component';

describe('LoanGivingDebitFilterComponent', () => {
  let component: LoanGivingDebitFilterComponent;
  let fixture: ComponentFixture<LoanGivingDebitFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingDebitFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingDebitFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
