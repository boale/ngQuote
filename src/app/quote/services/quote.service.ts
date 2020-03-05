import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import quotes from 'quotesy';

import { Quote } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getRandom(): Observable<Quote> {
    const randomQuote = quotes.random() as Quote;

    return of(randomQuote);
  }
}
