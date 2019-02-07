import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingDebitComponent } from './loan-giving-debit.component';

describe('LoanGivingDebitComponent', () => {
  let component: LoanGivingDebitComponent;
  let fixture: ComponentFixture<LoanGivingDebitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingDebitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
