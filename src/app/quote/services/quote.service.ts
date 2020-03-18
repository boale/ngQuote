import { Inject, Injectable, InjectionToken } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

import quotesy from 'quotesy';

import { Quote } from '../models';

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

  constructor(@Inject(QUOTESY) private quotes: any) {}

  getRandom(): Observable<Quote> {
    const randomQuote = this.quotes.random() as Quote;

    this.emitQuote(randomQuote);

    return this.quote$;
  }

  private emitQuote(quote: Quote): void {
    this.quote$$.next(quote);
  }

}
