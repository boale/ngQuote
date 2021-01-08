import { Inject, Injectable, InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { QuoteApiService } from '../api-services';
import { Quote } from '../models';

import { environment } from '../../../environments/environment';

import quotesy from 'quotesy';
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

  hasApiUrl: boolean = !!environment.apiUrls.quote;

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

  private emitQuote(quote: Quote): void {
    this.quote$$.next({ ...quote });
  }

}
