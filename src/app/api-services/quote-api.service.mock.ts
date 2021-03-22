import { Observable, of } from 'rxjs';

import { Quote } from '../models';
import { QuoteApiService } from './quote-api.service';

export class MockQuoteApiService {

  getAll(): Observable<Quote[]> {
    return of([]);
  }

  share(): Observable<any> {
    return of({});
  }

  getRandom(): Observable<Quote> {
    return of();
  }

  edit(): Observable<any> {
    return of();
  }

  create(): Observable<any> {
    return of();
  }

  delete(): Observable<any> {
    return of();
  }

  getById(): Observable<any> {
    return of();
  }


  getRandomByTag(tag: string): Observable<Quote> {
    return of();
  }

}

export const mockQuoteApiServiceProvider = {
  provide: QuoteApiService,
  useClass: MockQuoteApiService,
};
