import { CreditHistoryModel } from './../../../service/models';
import { ArchiveService } from './../../../service/archive/archive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-archive',
  templateUrl: './credit-archive.component.html',
  styleUrls: ['./credit-archive.component.scss']
})
export class CreditArchiveComponent implements OnInit {

  all_funds: CreditHistoryModel[] = [];
  table_columns = ["action by", "action time", "record added", "old head", "new head", "old amount", "new amount", "message"]

  search = "";

  constructor(private _archiveService: ArchiveService) { }

  ngOnInit() {
    this.get_all()
  }

  get_all() {
    this._archiveService.get_all_funds_archive(this.search)
      .subscribe(
        (response) => {
          return this.all_funds = response;
        }
      )
  }

}
