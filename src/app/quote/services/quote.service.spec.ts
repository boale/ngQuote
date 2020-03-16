import { async, inject, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { Quote } from '../models';
import { QuoteService, QUOTESY } from './quote.service';
import { mockQuotesyProvider } from './quote.service.mock';

const mockQuote: Quote = {
  text: 'quote text',
  author: 'author',
};

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

  it('should return an Observable of quote object', () => {
    const quote = service.getRandom();
    expect(quote).toEqual(jasmine.any(Observable));
  });

  it('should execute quotesy to get random quote', async(inject([QUOTESY], (quotesy) => {
    const spy = spyOn(quotesy, 'random').and.returnValue(mockQuote);

    service.getRandom().subscribe((quote) => {
      expect(spy).toHaveBeenCalled();
      expect(quote).toEqual(mockQuote);
    });
  })));

});
