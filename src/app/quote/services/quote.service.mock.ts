import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QuoteService } from './quote.service';

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
