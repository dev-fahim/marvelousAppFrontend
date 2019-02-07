import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingCreditComponent } from './loan-giving-credit.component';

describe('LoanGivingCreditComponent', () => {
  let component: LoanGivingCreditComponent;
  let fixture: ComponentFixture<LoanGivingCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
