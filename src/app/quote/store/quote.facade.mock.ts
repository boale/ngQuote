import { of } from 'rxjs';

import { QuoteStoreFacade } from './quote.facade';

export class QuoteStoreFacadeMock {

  quote$ = of({});

  getQuote(): void {}

}

export const quoteStoreFacadeMockProvider = { provide: QuoteStoreFacade, useClass: QuoteStoreFacadeMock };
