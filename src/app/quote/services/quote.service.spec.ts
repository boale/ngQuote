import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { mockQuotesyProvider } from './quote.service.mock';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockQuotesyProvider ],
    });
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
