import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightSelectMonthComponent } from './insight-select-month.component';

describe('InsightSelectMonthComponent', () => {
  let component: InsightSelectMonthComponent;
  let fixture: ComponentFixture<InsightSelectMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightSelectMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightSelectMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
