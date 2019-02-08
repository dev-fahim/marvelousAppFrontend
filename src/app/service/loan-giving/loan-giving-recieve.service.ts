import { ExpenditureRecordFilter } from './../expenditure/record.service';
import { Injectable } from '@angular/core';
import { RecordService, EXPENDITURE_RECORD_REST_API_URL } from '../expenditure/record.service';
import * as models from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoanGivingRecieveService extends RecordService {

  baseUrl = EXPENDITURE_RECORD_REST_API_URL + 'loan-giving/';

  get_all_expenditures(filters: ExpenditureRecordFilter) {
    return super.get_all_expenditures(filters);
  }

  add_record(data: models.ExpenditureRecordPOSTModel){
    return super.add_record(data);
  }

  get_specific_record(uuid: string) {
    return super.get_specific_record(uuid);
  }

  update_record(data: models.ExpenditureRecordPUTModel, uuid: string) {
    return super.update_record(data, uuid);
  }

  delete_record(uuid: string, payloads: models.ExpenditureRecordPUTModel) {
    return super.delete_record(uuid, payloads);
  }

}
