import {Inject, Injectable, InjectionToken} from '@angular/core';

import { Observable, of } from 'rxjs';

import quotesy from 'quotesy';

import { Quote } from '../models';
import {QuoteService} from './quote.service';

export const QUOTESY = new InjectionToken('QUOTESY', {
  providedIn: 'root',
  factory: () => quotesy },
);

export class QuoteServiceMock {

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }
}

export const quotesyMockProvider = {
  provide: QUOTESY,
  useValue: { random() {}, },
};

export const quoteServiceMockProvider = {
  provide: QuoteService,
  useClass: QuoteServiceMock,
};
