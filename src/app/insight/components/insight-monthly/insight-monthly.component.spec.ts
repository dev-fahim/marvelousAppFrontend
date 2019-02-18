import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightMonthlyComponent } from './insight-monthly.component';

describe('InsightMonthlyComponent', () => {
  let component: InsightMonthlyComponent;
  let fixture: ComponentFixture<InsightMonthlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightMonthlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
