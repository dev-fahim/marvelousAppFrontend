import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingCreditFilterComponent } from './loan-giving-credit-filter.component';

describe('LoanGivingCreditFilterComponent', () => {
  let component: LoanGivingCreditFilterComponent;
  let fixture: ComponentFixture<LoanGivingCreditFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingCreditFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingCreditFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
