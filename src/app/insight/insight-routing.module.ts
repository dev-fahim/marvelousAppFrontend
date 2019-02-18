import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightYearlyComponent } from './components/insight-yearly/insight-yearly.component';
import { InsightMonthlyComponent } from './components/insight-monthly/insight-monthly.component';
import { InsightSelectMonthComponent } from './components/insight-select-month/insight-select-month.component';

const routes: Routes = [
  { path: 'yearly', component: InsightYearlyComponent },
  { path: 'select-month', component: InsightSelectMonthComponent },
  { path: 'monthly/:month', component: InsightMonthlyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
