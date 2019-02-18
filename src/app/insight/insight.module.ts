import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightRoutingModule } from './insight-routing.module';
import { InsightYearlyComponent } from './components/insight-yearly/insight-yearly.component';
import { ChartsModule } from 'ng2-charts';
import { InsightMonthlyComponent } from './components/insight-monthly/insight-monthly.component';
import { FormsModule } from '@angular/forms';
import { InsightSelectMonthComponent } from './components/insight-select-month/insight-select-month.component';

@NgModule({
  declarations: [InsightYearlyComponent, InsightMonthlyComponent, InsightSelectMonthComponent],
  imports: [
    CommonModule,
    InsightRoutingModule,
    FormsModule,
    ChartsModule
  ]
})
export class InsightModule { }
