import { Inject, Injectable, InjectionToken } from '@angular/core';

import quotesy from 'quotesy';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { QuoteApiService } from '../api-services';
import { ContactData, Quote } from '../models';
import { environment } from '../../../environments/environment';

export const QUOTESY = new InjectionToken('QUOTESY', {
  providedIn: 'root',
  factory: () => quotesy,
});

@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  private quote$$ = new BehaviorSubject<Quote>(null);
  quote$: Observable<Quote> = this.quote$$.asObservable().pipe(distinctUntilChanged());

  hasApiUrl = !!environment.apiUrls.quote;
  hasShareApiUrl = !!environment.apiUrls.share;

  constructor(
    private quotesApi: QuoteApiService,
    @Inject(QUOTESY) private quotes: any,
  ) {}

  getRandom(): Observable<Quote> {
    return (
      this.hasApiUrl
        ? this.quotesApi.getRandom()
        : of(this.quotes.random())
    ).pipe(
      tap((quote: Quote) => this.emitQuote({ ...quote })),
    );
  }

  share(quote: Quote, contactData: ContactData): Observable<any> {
    return this.hasShareApiUrl ?
      this.quotesApi.share(quote, contactData) :
      // eslint-disable-next-line no-console
      of(null).pipe(tap(() => console.info('shared: ', quote, contactData)));
  }

  private emitQuote(quote: Quote): void {
    this.quote$$.next({ ...quote });
  }

}
