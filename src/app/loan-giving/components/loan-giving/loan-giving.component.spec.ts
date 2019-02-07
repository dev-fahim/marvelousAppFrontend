import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanGivingComponent } from './loan-giving.component';

describe('LoanGivingComponent', () => {
  let component: LoanGivingComponent;
  let fixture: ComponentFixture<LoanGivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanGivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanGivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
