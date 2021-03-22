import { BehaviorSubject, Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QuoteService, QUOTESY } from './quote.service';

export class MockQuoteService {
  quote$ = of({ id: '1', text: 'test quote text', author: 'test' });
  hasApiUrl = true;
  hasShareApiUrl = false;
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  getRandom(): Observable<Quote> {
    return of({} as Quote);
  }

  share() {
    return of({});
  }

  getById() {
    return of({});
  }

  edit() {
    return of({});
  }

  create() {
    return of({});
  }

  getAll() {
    return of([]);
  }

  delete() {
    return of({});
  }
}


export const mockQuoteServiceProvider = {
  provide: QuoteService,
  useClass: MockQuoteService,
};

export const mockQuotesyProvider = {
  provide: QUOTESY,
  useValue: {
    random() {
    },
    parse_json() {
    },
  },
};
