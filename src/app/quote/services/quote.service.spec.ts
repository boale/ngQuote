import { async, inject, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { QuoteApiService } from '../api-services';
import { mockQuoteApiServiceProvider } from '../api-services/quote-api.service.mock';
import { Quote } from '../models';

import { QuoteService } from './quote.service';

const mockQuote: Quote = {
  text: 'quote text',
  author: 'author',
};

describe('QuoteService', () => {
  let service: QuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ mockQuoteApiServiceProvider ],
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

  it('should execute quotesy to get random quote', async(inject([QuoteApiService], (quotesApi) => {
    const spy = spyOn(quotesApi, 'getRandom').and.returnValue(of(mockQuote));

    service.getRandom().subscribe((quote) => {
      expect(spy).toHaveBeenCalled();
      expect(quote).toEqual(mockQuote);
    });
  })));

});
