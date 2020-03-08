import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import {QuoteStoreFacade} from './quote.facade';

export class QuoteStoreFacadeMock {

  quote$: Observable<Quote> = of({} as Quote);

  getQuote(): void {}

}

export const quoteStoreFacadeMockProvider = {
  provide: QuoteStoreFacade,
  useClass: QuoteStoreFacadeMock,
};
