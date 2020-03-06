import { of } from 'rxjs';

import { QuoteStoreFacade } from './quote.facade';

export class MockQuoteStoreFacade {

  quote$ = of({});

  getQuote(): void {}

}

export const mockQuoteStoreFacadeProvider = { provide: QuoteStoreFacade, useClass: MockQuoteStoreFacade };
