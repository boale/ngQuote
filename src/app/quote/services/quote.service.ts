import {Inject, Injectable, InjectionToken} from '@angular/core';

import { Observable, of } from 'rxjs';

import quotesy from 'quotesy';
export const QUOTESY = new InjectionToken('QUOTESY', {
  providedIn: 'root',
  factory: () => quotesy,
});

import { Quote } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(@Inject(QUOTESY) private quotes: any) {
  }

  getRandom(): Observable<Quote> {
    const randomQuote = this.quotes.random() as Quote;

    return of(randomQuote);
  }
}
