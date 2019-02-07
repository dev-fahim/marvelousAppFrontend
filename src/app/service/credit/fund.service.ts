import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LOCAL_REST_API_SERVER } from './../server.url';
import { catchError, map } from 'rxjs/operators';
import * as common from 'src/app/common';
import * as models from '../models';
import { throwError } from 'rxjs';

export interface CreditFundRecordListFilter {
  added: string;
  fund_source: string;
  max_amount: string;
  min_amount: string;
  ordering: string;
  added_after: string;
  added_before: string;
  amount: string;
  search: string;
}

export interface FundStatus {
  is_not_locked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FundService {

  public baseUrl: string = LOCAL_REST_API_SERVER + 'credit/fund/';

  constructor(private _http: HttpClient) { }

  get_all_funds(filters: CreditFundRecordListFilter = {
    added: '',
    amount: '',
    fund_source: '',
    max_amount: '',
    min_amount: '',
    added_after: '',
    added_before: '',
    ordering: '',
    search: ''
  }) {
    return this._http.get<models.CreditFundRecordGETModel[]>(this.baseUrl + 'list/', {
      params:
      {
        added: filters.added,
        amount: filters.amount,
        fund_source: filters.fund_source,
        max_amount: filters.max_amount,
        min_amount: filters.min_amount,
        added_after: filters.added_after,
        added_before: filters.added_before,
        ordering: filters.ordering,
        search: filters.search
      }
    }).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }

  add_funds(data: any) {
    return this._http.post<models.CreditFundRecordPOSTModel>(this.baseUrl + 'list-add/', JSON.stringify(data)).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }

  get_specific_fund_record(uuid: string) {
    return this._http.get<models.CreditFundRecordGETModel>(this.baseUrl + 'view/' + uuid + '/').pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }
  
  get_fund_status() {
    return this._http.get<FundStatus>(this.baseUrl + 'settings/').pipe(
      map(
        (next: FundStatus) => {
          return next.is_not_locked;
        }
      ),
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }

  update_fund_settings(data: boolean) {
    return this._http.put<FundStatus>(this.baseUrl + 'settings/edit/', JSON.stringify(data)).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }

  update_funds(data: any, uuid: string) {
    return this._http.put<models.CreditFundRecordPUTModel>(this.baseUrl + 'view-update-delete/' + uuid + '/', JSON.stringify(data)).pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }

  delete_funds(uuid: string) {
    return this._http.delete<models.CreditFundRecordPUTModel>(this.baseUrl + 'view-update-delete/' + uuid + '/').pipe(
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(common.get_http_response_error(error))
        }
      )
    )
  }
}
