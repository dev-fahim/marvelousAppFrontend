import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanGivingRoutingModule } from './loan-giving-routing.module';
import { LoanGivingCreditComponent } from './components/loan-giving-credit/loan-giving-credit.component';
import { LoanGivingDebitComponent } from './components/loan-giving-debit/loan-giving-debit.component';
import { LoanGivingDebitListComponent } from './components/loan-giving-debit/loan-giving-debit-list/loan-giving-debit-list.component';
import { LoanGivingDebitAddComponent } from './components/loan-giving-debit/loan-giving-debit-add/loan-giving-debit-add.component';
import { LoanGivingDebitEditComponent } from './components/loan-giving-debit/loan-giving-debit-edit/loan-giving-debit-edit.component';
import { LoanGivingCreditListComponent } from './components/loan-giving-credit/loan-giving-credit-list/loan-giving-credit-list.component';
import { LoanGivingCreditAddComponent } from './components/loan-giving-credit/loan-giving-credit-add/loan-giving-credit-add.component';
import { LoanGivingCreditEditComponent } from './components/loan-giving-credit/loan-giving-credit-edit/loan-giving-credit-edit.component';
import {
  LoanGivingCreditFilterComponent
} from './components/loan-giving-credit/loan-giving-credit-filter/loan-giving-credit-filter.component';
import { LoanGivingDebitFilterComponent } from './components/loan-giving-debit/loan-giving-debit-filter/loan-giving-debit-filter.component';
import { LoanGivingComponent } from './components/loan-giving/loan-giving.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoanGivingCreditComponent,
    LoanGivingDebitComponent,
    LoanGivingDebitListComponent,
    LoanGivingDebitAddComponent,
    LoanGivingDebitEditComponent,
    LoanGivingCreditListComponent,
    LoanGivingCreditAddComponent,
    LoanGivingCreditEditComponent,
    LoanGivingCreditFilterComponent,
    LoanGivingDebitFilterComponent,
    LoanGivingComponent
  ],
  imports: [
    CommonModule,
    LoanGivingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class LoanGivingModule { }
