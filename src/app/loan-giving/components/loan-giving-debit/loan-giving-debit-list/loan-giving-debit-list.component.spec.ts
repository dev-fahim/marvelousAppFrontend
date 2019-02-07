import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingDebitListComponent } from './loan-giving-debit-list.component';

describe('LoanGivingDebitListComponent', () => {
  let component: LoanGivingDebitListComponent;
  let fixture: ComponentFixture<LoanGivingDebitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingDebitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingDebitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
