import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingDebitEditComponent } from './loan-giving-debit-edit.component';

describe('LoanGivingDebitEditComponent', () => {
  let component: LoanGivingDebitEditComponent;
  let fixture: ComponentFixture<LoanGivingDebitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingDebitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingDebitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
