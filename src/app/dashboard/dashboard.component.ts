import { AuthService } from './../login/auth/auth.service';
import { RootObject, CreditFundSourceGETModel, ExpenditureHeadingGETModel } from './../service/models';
import { Component, OnInit } from '@angular/core';
import { SourceService } from '../service/credit/source.service';
import { HeadingService } from '../service/expenditure/heading.service';
import { RecordService } from '../service/expenditure/record.service';
import { today_date } from '../service/today.date';
import * as errors from '../common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'project';
  fund_status = true;
  all_sources: CreditFundSourceGETModel[] = [];
  all_headings: ExpenditureHeadingGETModel[] = [];
  todays_all_expenditures: any[] = [];
  myDate: any;
  loading = true;
  arr = [1, 2, 3, 4];
  today = today_date();
  messages: {message: string, type: string}[] = [];
  api_services: RootObject = {
    'is_base_user': false,
    'is_sub_user': false,
    'user_permissions': {
        'canAdd': false,
        'canEdit': false,
        'canList': false,
        'canRetrieve': false,
        'canFundSourceListCreate': false,
        'canFundSourceEdit': false,
        'is_active': false,
        'user_type': ''
    },
    'account_status': {
        'is_approved': false,
        'is_locked': false,
        'is_active': false
    },
    'todays_open_credit_fund': 0,
    'remaining_credit_fund_amount': 0,
    'this_month_total_expend_amount': 0,
    'total_unauthorized_expend_amount': 0,
    'total_credit_fund_amount': 0,
    'fund_status': false,
    'this_year_total_expend_amoun': 0,
    'this_year_remaining_credit_fund_amount': 0,
    'this_year_total_credit_fund_amount': 0,
    'this_year_total_unauthorized_expend_amount': 0,
    'this_month_total_credit_fund_amount': 0,
    'this_year': ''
};

  constructor(
    public sourceService: SourceService,
    public headingService: HeadingService,
    public recordService: RecordService,
    private _auth: AuthService
  ) {
  }

  get_api_services() {
    this._auth.getUserPermission()
      .subscribe(
        (response) => {
          this.fund_status = response.fund_status;
          return this.api_services = response;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type});
        }
      );
  }

  ngOnInit() {
    this.get_api_services();

    this.sourceService.get_all_sources({ordering: '', search: ''})
      .subscribe(
        (result) => {
          this.loading = false;
          const data = [];
          for (const source of result) {
            if (source.is_deleted === false) {data.push(source); }
          }
          return this.all_sources = data;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type});
        }
      );
    this.headingService.get_all_headings()
      .subscribe(
        (result) => {
          this.loading = false;
          const data = [];
          for (const heading of result) {
            if (heading.is_deleted === false) {data.push(heading); }
          }
          return this.all_headings = data;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type});
        }
      );
    this.recordService.get_all_expenditures({
      is_verified: '',
      amount: '',
      max_amount: '',
      min_amount: '',
      added_after: '',
      added_before: '',
      expend_date_after: '',
      expend_date_before: '',
      added_date: this.today,
      heading: '',
      search: '',
      ordering: ''
    })
      .subscribe(
        (result: any) => {
          this.loading = false;
          return this.todays_all_expenditures = result;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type});
        }
      );
  }

  get_fund_status() {
    return this.api_services.fund_status;
  }

  get_expend_length() {
    return this.todays_all_expenditures.length;
  }

  get_this_month_total_expend() {
    return this.api_services.this_month_total_expend_amount;
  }

  get_total_unauthorized_expend() {
    return this.api_services.total_unauthorized_expend_amount;
  }

  get_remailning_balance() {
    return this.api_services.remaining_credit_fund_amount;
  }

  get_starting_balance() {
    return this.api_services.todays_open_credit_fund;
  }

  // this year all records

  get_this_year_credit() {
    return this.api_services.this_year_total_credit_fund_amount;
  }

  get_this_year_expends() {
    return this.api_services.this_year_total_expend_amoun;
  }

  get_this_year_remaining_balance() {
    return this.api_services.this_year_remaining_credit_fund_amount;
  }

  get_this_year_unauthorized_expends() {
    return this.api_services.this_year_total_unauthorized_expend_amount;
  }

  get_this_month_total_credit_fund_amount() {
    return this.api_services.this_month_total_credit_fund_amount;
  }

  get_this_year() {
    return this.api_services.this_year;
  }

  // end here all records

  is_loading() {
    return this.loading;
  }

  get status() {
    return this.fund_status;
  }

  onReload() {
    this.ngOnInit();
  }

  get_total_credit_heads() {
    let i = 0;
    for (const l of this.all_sources) {
      i = i + 1;
    }
    return i;
  }

  get_total_debit_heads() {
    let i = 0;
    for (const l of this.all_headings) {
      i = i + 1;
    }
    return i;
  }
}
