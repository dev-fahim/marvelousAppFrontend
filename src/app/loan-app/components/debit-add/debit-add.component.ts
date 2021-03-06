import { LoanService } from 'src/app/service/loan/loan.service';
import { LoanExpendGETModel } from './../../../service/models';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeadingService } from './../../../service/expenditure/heading.service';
import { RecordService } from 'src/app/service/expenditure/record.service';
import { FundService } from 'src/app/service/credit/fund.service';
import { ExpenditureHeadingGETModel } from 'src/app/service/models';
import * as errors from '../../../common';


@Component({
  selector: 'app-debit-add',
  templateUrl: './debit-add.component.html',
  styleUrls: ['./debit-add.component.scss']
})
export class DebitAddComponent implements OnInit {
  @Output() expenditure_added = new EventEmitter()
  form = new FormGroup({
    expend_by: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', [
      Validators.required
    ]),
    amount: new FormControl('', [
      Validators.required
    ]),
    expend_date: new FormControl('', [
      Validators.required
    ]),
    expend_heading: new FormControl('', [
      Validators.required
    ]),
    extra_description: new FormControl("")
  })
  all_headings: ExpenditureHeadingGETModel[];
  fund_status = false;;
  messages: { message: string, type: string }[] = [];
  loading = false;

  constructor(
    public headingService: HeadingService,
    public recordService: RecordService,
    public fundService: FundService,
    private _loanService: LoanService
  ) { }

  ngOnInit() {
    this.headingService.get_all_headings()
      .subscribe(
        (result) => {
          return this.all_headings = result;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type})
        }
      )
    this.fundService.get_fund_status()
      .subscribe(
        (result) => {
          return this.fund_status = result;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type})
        }
      )
  }

  get expend_by() {
    return this.form.get('expend_by')
  }
  get description() {
    return this.form.get('description')
  }
  get amount() {
    return this.form.get('amount')
  }
  get expend_date() {
    return this.form.get('expend_date')
  }
  get expend_heading() {
    return this.form.get('expend_heading')
  }

  onSubmit() {
    this.loading = true;
    this._loanService.add_record(this.form.value)
      .subscribe(
        (next) => {
          this.expenditure_added.emit(this.form.value)
          this.form.reset();
          this.loading = false;
        },
        (error: errors.AppError) => {
          this.loading = false;
          const main_error = errors.throw_http_response_error(error);
          return this.messages.push({message: main_error.detail, type: main_error.type})
        }
      )
  }

  get fund_not_locked() {
    return this.fund_status;
  }

  onReset() {
    this.messages = [];
    this.form.reset();
    this.form.get('extra_description').setValue('');
  }
}
