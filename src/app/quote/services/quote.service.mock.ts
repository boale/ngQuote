import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QuoteService, QUOTESY } from './quote.service';

export class MockQuoteService {

  quote$ = of({});

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }
}

export const mockQuoteServiceProvider = {
  provide: QuoteService,
  useClass: MockQuoteService,
};

export const mockQuotesyProvider = {
  provide: QUOTESY,
  useValue: { random() {} },
};


