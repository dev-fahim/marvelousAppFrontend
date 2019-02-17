import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LOCAL_REST_API_SERVER } from '../server.url';
import { InsightYearlyModel } from '../models';
import { map, catchError } from 'rxjs/operators';
import { get_http_response_error } from 'src/app/common';
import { throwError } from 'rxjs';

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
}
