import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ContactData, Quote } from '../models';

@Injectable({ providedIn: 'root' })
export class QuoteApiService {
  private apiBase: string = environment.apiUrls.quote;
  private shareApiBase: string = environment.apiUrls.share;

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
   * @returns {Observable<Quote>}
   */
  getRandom(): Observable<Quote> {
    const url = `${ this.apiBase }/quotes/random`;

    return this.http.get<Quote>(url);
  }

  /**
   * @param {string} tag
   * @returns {Observable<Quote>}
   */
  getRandomByTag(tag: string): Observable<Quote> {
    const url = `${ this.apiBase }/quotes/random-by-tag`;
    const params = new HttpParams({ fromObject: { tag } });

    return this.http.get<Quote>(url, { params });
  }

  share(quote: Quote, contactDetails?: ContactData): Observable<any> {
    const url = `${ this.shareApiBase }/share`;

    return this.http.post<any>(url, { quote, ...contactDetails });
  }

  create(quote: Quote): Observable<any> {
    const url = `${ this.apiBase }/quotes`; // TODO

    return this.http.post<any>(url, { quote });
  }

  delete(quote: Quote): Observable<any> {
    const url = `${ this.apiBase }/quotes`; // TODO

    return this.http.delete<any>(url);
  }

  edit(quote: Quote): Observable<any> {
    const url = `${ this.apiBase }/quotes`; // TODO

    return this.http.put<any>(url, quote);
  }

}
