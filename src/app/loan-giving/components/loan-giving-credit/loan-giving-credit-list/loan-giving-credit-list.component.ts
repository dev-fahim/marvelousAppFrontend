import { LoanGivingService } from './../../../../service/loan-giving/loan-giving.service';
import { CreditFundRecordListFilter } from 'src/app/service/credit/fund.service';
import { ActivatedRoute } from '@angular/router';
import { CreditFundRecordGETModel } from './../../../../service/models';
import { Component, OnInit } from '@angular/core';
import * as errors from '../../../../common';
import { NotifyService } from 'src/app/service/notify.service';

@Component({
  selector: 'app-loan-giving-credit-list',
  templateUrl: './loan-giving-credit-list.component.html',
  styleUrls: ['./loan-giving-credit-list.component.scss']
})
export class LoanGivingCreditListComponent implements OnInit {
  loading = false;
  all_credit_fund_records: CreditFundRecordGETModel[] = [];
  messages: { message: string, type: string }[] = [];
  added = '';
  amount = '';
  fund_source = '';
  max_amount = '';
  min_amount = '';
  added_after = '';
  added_before = '';
  search = '';
  ordering = '';
  show_modal = false;

  filter_array = [
    'added',
    'amount',
    'fund_source',
    'max_amount',
    'min_amount',
    'added_after',
    'added_before',
    'search',
    'ordering'
  ]

  constructor(
    private _fundService: LoanGivingService,
    private _acRoute: ActivatedRoute,
    private _notify: NotifyService
    ) { }

  toggle_modal() {
    return this.show_modal = !this.show_modal
  }

  ngOnInit(filters: CreditFundRecordListFilter = {
    added: '',
    amount: '',
    fund_source: '',
    max_amount: '',
    min_amount: '',
    added_after: '',
    added_before: '',
    ordering: '',
    search: ''
  }, is_filtered = false) {
    this.loading = true;
    if (is_filtered) {
      for (let data of this.filter_array) {
        if (filters[data] == null) {
          this[data] = '';
        } else {
          this[data] = filters[data];
        }
      }
    } else {
      this._acRoute.queryParamMap.subscribe(
        (params) => {
          for (let data of this.filter_array) {
            if (params.get(data) == null) {
              this[data] = '';
            } else {
              this[data] = params.get(data);
            }
          }
        })
    }
    this._fundService.get_all_funds({
      added: this.added,
      amount: this.amount,
      fund_source: this.fund_source,
      max_amount: this.max_amount,
      min_amount: this.min_amount,
      added_after: this.added_after,
      added_before: this.added_before,
      search: this.search,
      ordering: this.ordering
    })
      .subscribe(
        (next) => {
          this.loading = false;
          let data = [];
          for (const record of next) {
            if (record.is_refundable === false && record.is_returnable === true) { data.push(record) }
          }
          this.all_credit_fund_records = data;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({ message: main_error.detail, type: main_error.type })
        }
      )
  }

  onFilterData(filters: CreditFundRecordListFilter) {
    return this.ngOnInit(filters, true); // Todo: Check if filtering has errors,
  }

  onReload() {
    return this.ngOnInit();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  onAddData(data: CreditFundRecordGETModel) {
    this.all_credit_fund_records.splice(0, 0, data);
    this._notify.set_notify("success", "record added successfuly", true);
    this.toggle_modal();
  }

  get_sum_amount() {
    let amounts = [];
    for (let data of this.all_credit_fund_records) {
      amounts.push(data.amount);
    }
    let sum = 0;

    for (let amount of amounts) {
      sum = sum + amount;
    }

    return {
      'amount': sum
    }
  }
}
