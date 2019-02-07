import { ExpenditureHistoryModel } from './../../../service/models';
import { BackAppService } from './../../../service/back-app/back-app.service';
import { Component, OnInit } from '@angular/core';
import * as errors from '../../../common';

@Component({
  selector: 'app-history-expend',
  templateUrl: './history-expend.component.html',
  styleUrls: ['./history-expend.component.scss']
})
export class HistoryExpendComponent implements OnInit {

  all_expends: ExpenditureHistoryModel[] = [];
  table_columns = [
    "action by",
    "action date",
    "record added",
    "old debit head",
    "new debit head",
    "old description",
    "new description",
    "old amount",
    "new amount",
    "message"
  ]

  search = "";

  constructor(private _backAppService: BackAppService) { }

  ngOnInit() {
    this.get_all()
  }

  get_all() {
    this._backAppService.get_all_expenditures_history(this.search)
      .subscribe(
        (response) => {
          let data = [];
          for (const expend of response) {
            if (expend.is_deleted === false) { data.push(expend) }
          }
          return this.all_expends = data;
        },
        (error: errors.AppError) => {
          return errors.throw_http_response_error(error);
        }
      )
  }

}
