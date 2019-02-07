import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingCreditAddComponent } from './loan-giving-credit-add.component';

describe('LoanGivingCreditAddComponent', () => {
  let component: LoanGivingCreditAddComponent;
  let fixture: ComponentFixture<LoanGivingCreditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingCreditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingCreditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
