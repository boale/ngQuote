import { TestBed } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { quoteServiceMockProvider } from './quote.service.mock';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ quoteServiceMockProvider ],
    });
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
