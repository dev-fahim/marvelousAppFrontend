import { ArchiveService } from './../../../service/archive/archive.service';
import { ExpenditureHistoryModel } from './../../../service/models';
import { Component, OnInit } from '@angular/core';
import * as errors from '../../../common';

@Component({
  selector: 'app-debit-archive',
  templateUrl: './debit-archive.component.html',
  styleUrls: ['./debit-archive.component.scss']
})
export class DebitArchiveComponent implements OnInit {

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

  constructor(private _archiveService: ArchiveService) { }

  ngOnInit() {
    this.get_all()
  }

  get_all() {
    this._archiveService.get_all_expenditures_archive(this.search)
      .subscribe(
        (response) => {
          return this.all_expends = response;
        },
        (error: errors.AppError) => {
          return errors.throw_http_response_error(error);
        }
      )
  }

}
