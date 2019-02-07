import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingDebitAddComponent } from './loan-giving-debit-add.component';

describe('LoanGivingDebitAddComponent', () => {
  let component: LoanGivingDebitAddComponent;
  let fixture: ComponentFixture<LoanGivingDebitAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingDebitAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingDebitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
