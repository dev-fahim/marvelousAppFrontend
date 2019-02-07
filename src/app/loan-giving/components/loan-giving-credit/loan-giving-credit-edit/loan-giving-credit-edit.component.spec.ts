import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingCreditEditComponent } from './loan-giving-credit-edit.component';

describe('LoanGivingCreditEditComponent', () => {
  let component: LoanGivingCreditEditComponent;
  let fixture: ComponentFixture<LoanGivingCreditEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingCreditEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingCreditEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
