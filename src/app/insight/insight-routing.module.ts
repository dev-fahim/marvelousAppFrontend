import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightYearlyComponent } from './components/insight-yearly/insight-yearly.component';

const routes: Routes = [
  { path: 'yearly', component: InsightYearlyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsightRoutingModule { }
