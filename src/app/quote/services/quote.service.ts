import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { QuoteApiService } from '../api-services';
import { Quote } from '../models';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {

  private quote$$ = new BehaviorSubject<Quote>(null);
  quote$: Observable<Quote> = this.quote$$.asObservable().pipe(distinctUntilChanged());

  constructor(private quotesApi: QuoteApiService) {}

  getRandom(): Observable<Quote> {
    return this.quotesApi.getRandom().pipe(
      tap((quote: Quote) => this.emitQuote({ ...quote })),
    );
  }

  private emitQuote(quote: Quote): void {
    this.quote$$.next({ ...quote });
  }

}
