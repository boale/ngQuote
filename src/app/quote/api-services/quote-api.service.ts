import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Quote } from '../models';

@Injectable({ providedIn: 'root' })
export class QuoteApiService {
  private apiBase = environment.apiUrls.quote;

  constructor(
    private http: HttpClient,
  ) {}

  /**
   *
   * @returns {Observable<Quote>}
   */
  getAll(): Observable<Quote[]> {
    const url = `${ this.apiBase }/quotes`;

    return this.http.get<Quote[]>(url);
  }

  /**
   *
   * @returns {Observable<Quote>}
   */
  getRandom(): Observable<Quote> {
    const url = `${ this.apiBase }/quotes/random`;

    return this.http.get<Quote>(url);
  }

  /**
   *
   * @param {string} tag
   * @returns {Observable<Quote>}
   */
  getRandomByTag(tag: string): Observable<Quote> {
    const url = `${ this.apiBase }/quotes/random-by-tag`;
    const params = new HttpParams({ fromObject: { tag } });

    return this.http.get<Quote>(url, { params });
  }

}
