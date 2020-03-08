import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QuoteService, QUOTESY } from './quote.service';

export class QuoteServiceMock {

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }
}

export const quoteServiceMockProvider = {
  provide: QuoteService,
  useClass: QuoteServiceMock,
};

export const quotesyMockProvider = {
  provide: QUOTESY,
  useValue: { random() {} },
};


