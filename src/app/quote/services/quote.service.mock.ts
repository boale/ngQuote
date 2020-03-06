import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QUOTESY, QuoteService } from './quote.service';

export const mockQuotesyProvider = { provide: QUOTESY, useValue: { random() {} } };

export class MockQuoteService {

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }
}

export const mockQuoteServiceProvider = {
  provide: QuoteService,
  useClass: MockQuoteService,
};
