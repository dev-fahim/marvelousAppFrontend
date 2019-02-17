import { BackAppService } from './../../../service/back-app/back-app.service';
import { CreditHistoryModel } from './../../../service/models';
import { Component, OnInit } from '@angular/core';
import * as errors from '../../../common';

@Component({
  selector: 'app-history-credit',
  templateUrl: './history-credit.component.html',
  styleUrls: ['./history-credit.component.scss']
})
export class HistoryCreditComponent implements OnInit {

  all_funds: CreditHistoryModel[] = [];
  table_columns = ["action by", "action time", "fund added", "old head", "new head", "old amount", "new amount", "message"]

  search = "";

  constructor(private _backAppService: BackAppService) { }

  ngOnInit() {
    this.get_all()
  }

  get_all() {
    this._backAppService.get_all_funds_history(this.search)
      .subscribe(
        (response) => {
          let data = [];
          for (const funds of response) {
            if (funds.is_deleted === false) { data.push(funds) }
          }
          return this.all_funds = data;
        },
        (error: errors.AppError) => {
          return errors.throw_http_response_error(error);
        }
      )
  }
}
