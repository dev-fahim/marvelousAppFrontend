import { FundService } from './../credit/fund.service';
import { CreditFundRecordListFilter } from 'src/app/service/credit/fund.service';
import { LOCAL_REST_API_SERVER } from './../server.url';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanGivingService extends FundService {
  baseUrl = LOCAL_REST_API_SERVER + 'credit/fund/loan-recieve/';
  get_all_funds(filters: CreditFundRecordListFilter) {
    return super.get_all_funds(filters);
  }
  add_funds(data: any) {
    return super.add_funds(data);
  }
  get_specific_fund_record(uuid: string) {
    return super.get_specific_fund_record(uuid);
  }
  update_funds(data: any, uuid: string) {
    return super.update_funds(data, uuid);
  }
  delete_funds(uuid: string) {
    return super.delete_funds(uuid);
  }
}
