import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsightRoutingModule } from './insight-routing.module';
import { InsightYearlyComponent } from './components/insight-yearly/insight-yearly.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [InsightYearlyComponent],
  imports: [
    CommonModule,
    InsightRoutingModule,
    ChartsModule
  ]
})
export class InsightModule { }
