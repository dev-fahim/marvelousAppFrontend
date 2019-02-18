import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LOCAL_REST_API_SERVER } from '../server.url';
import { InsightYearlyModel, InsightMonthlyModel } from '../models';
import { map, catchError } from 'rxjs/operators';
import { get_http_response_error } from 'src/app/common';
import { throwError } from 'rxjs';

const date = new Date()

export const INSIGHT_REST_API_ENDPOINT = LOCAL_REST_API_SERVER + 'insight/';

@Injectable({
  providedIn: 'root'
})
export class InsightService {

  constructor(private _http: HttpClient) { }

  getInsightYearly() {
    return this._http.get<InsightYearlyModel[]>(INSIGHT_REST_API_ENDPOINT + 'yearly/').pipe(
      map(
        (response: InsightYearlyModel[]) => {
          return response;
        }
      ),
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(get_http_response_error(error))
        }
      )
    );
  }

  getInsightMonthly(month: string = (date.getMonth() + 1).toString()) {
    return this._http.get<InsightMonthlyModel[]>(INSIGHT_REST_API_ENDPOINT + 'monthly/', { params: { month: month } }).pipe(
      map(
        (response: InsightMonthlyModel[]) => {
          return response;
        }
      ),
      catchError(
        (error: HttpErrorResponse) => {
          return throwError(get_http_response_error(error))
        }
      )
    );
  }
}
