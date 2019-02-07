import { LoanGivingDebitEditComponent } from './components/loan-giving-debit/loan-giving-debit-edit/loan-giving-debit-edit.component';
import { LoanGivingDebitListComponent } from './components/loan-giving-debit/loan-giving-debit-list/loan-giving-debit-list.component';
import { LoanGivingDebitComponent } from './components/loan-giving-debit/loan-giving-debit.component';
import { LoanGivingCreditEditComponent } from './components/loan-giving-credit/loan-giving-credit-edit/loan-giving-credit-edit.component';
import { LoanGivingCreditComponent } from './components/loan-giving-credit/loan-giving-credit.component';
import { LoanGivingCreditListComponent } from './components/loan-giving-credit/loan-giving-credit-list/loan-giving-credit-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'credit', component: LoanGivingCreditComponent, children: [
    { path: 'list-add', component: LoanGivingCreditListComponent },
    { path: 'edit/:uuid', component: LoanGivingCreditEditComponent }
  ] },
  { path: 'debit', component: LoanGivingDebitComponent, children: [
    { path: 'list-add', component: LoanGivingDebitListComponent },
    { path: 'edit/:uuid', component: LoanGivingDebitEditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanGivingRoutingModule { }
