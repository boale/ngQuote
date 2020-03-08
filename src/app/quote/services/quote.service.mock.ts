import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QUOTESY, QuoteService } from './quote.service';


export class QuoteServiceMock {

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }

}

export const quotesyMockProvider = {
  provide: QUOTESY,
  useValue: { random() {} },
};

export const quoteServiceMockProvider = {
  provide: QuoteService,
  useClass: QuoteServiceMock,
};
