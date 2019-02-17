import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightYearlyComponent } from './insight-yearly.component';

describe('InsightYearlyComponent', () => {
  let component: InsightYearlyComponent;
  let fixture: ComponentFixture<InsightYearlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightYearlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
