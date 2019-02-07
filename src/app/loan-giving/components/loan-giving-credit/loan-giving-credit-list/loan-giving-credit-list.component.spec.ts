import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingCreditListComponent } from './loan-giving-credit-list.component';

describe('LoanGivingCreditListComponent', () => {
  let component: LoanGivingCreditListComponent;
  let fixture: ComponentFixture<LoanGivingCreditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingCreditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
