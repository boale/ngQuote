import { TestBed } from '@angular/core/testing';

import { QuoteService, QUOTESY } from './quote.service';

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: QUOTESY, useValue: { random() {} } }],
    });
    service = TestBed.inject(QuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
