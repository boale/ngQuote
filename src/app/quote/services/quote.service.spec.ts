import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { QuoteApiService } from '../api-services';
import { mockQuoteApiServiceProvider } from '../api-services/quote-api.service.mock';
import { ContactData, Quote } from '../models';
import { QuoteService, QUOTESY } from './quote.service';
import { mockQuotesyProvider } from './quote.service.mock';

const mockQuote: Quote = {
  text: 'quote text',
  author: 'author',
};

describe('QuoteService', () => {
  let service: QuoteService;
  let quotesy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        mockQuoteApiServiceProvider,
        mockQuotesyProvider,
      ],
    });
    service = TestBed.inject(QuoteService);
    quotesy = TestBed.inject(QUOTESY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable of quote object', () => {
    const quote = service.getRandom();
    expect(quote).toEqual(jasmine.any(Observable));
  });

  it('should execute quotesy to get random quote', waitForAsync(inject([ QuoteApiService ], quotesApi => {
    service.hasApiUrl = false;
    const spyQuotesy = spyOn(quotesy, 'random').and.returnValue(mockQuote);
    const spy = spyOn(quotesApi, 'getRandom').and.returnValue(of(mockQuote));

    service.getRandom().subscribe(quote => {
      expect(spyQuotesy).toHaveBeenCalled();
      expect(spy).not.toHaveBeenCalled();
      expect(quote).toEqual(mockQuote);
    });
  })));

  it('should execute quotesy to get random quote', waitForAsync(inject([ QuoteApiService ], quotesApi => {
    service.hasApiUrl = true;
    const spyQuotesy = spyOn(quotesy, 'random').and.returnValue(mockQuote);
    const spy = spyOn(quotesApi, 'getRandom').and.returnValue(of(mockQuote));

    service.getRandom().subscribe(quote => {
      expect(spyQuotesy).not.toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();
      expect(quote).toEqual(mockQuote);
    });
  })));

  it('should call share API', inject([ QuoteApiService ], quoteApi => {
    const spy = spyOn(quoteApi, 'share').and.returnValue({});

    service.hasShareApiUrl = true;
    service.share({} as Quote, {} as ContactData);

    service.hasShareApiUrl = false;
    service.share({} as Quote, {} as ContactData);
    expect(spy).toHaveBeenCalledTimes(1);

  }));

});
