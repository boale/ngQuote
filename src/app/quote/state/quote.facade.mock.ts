import { Observable, of } from 'rxjs';

import { Quote } from '../models';

import { QuoteStoreFacade } from './quote.facade';

export class MockQuoteStoreFacade {

  quote$: Observable<Quote> = of({} as Quote);

  getQuote(): void {}

}

export const mockQuoteStoreFacadeProvider = {
  provide: QuoteStoreFacade,
  useClass: MockQuoteStoreFacade,
};
