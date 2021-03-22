import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastrService } from 'ngx-toastr';
import { Observable, of, throwError } from 'rxjs';

import { QuoteApiService } from '../api-services';
import { mockQuoteApiServiceProvider } from '../api-services/quote-api.service.mock';
import { ContactData, Quote } from '../models';
import { mockToastrServiceProvider } from '../stub/toastr-service.mock';
import { QuoteService, QUOTESY } from './quote.service';
import { mockQuotesyProvider } from './quote.service.mock';

const mockQuote: Quote = {
  id: '1',
  text: 'quote text',
  author: 'author',
};

const mockError = {
  error: {
    message: 'error message',
    status: 404,
  },
};

describe('QuoteService', () => {
  let service: QuoteService;
  let quotesy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        mockQuoteApiServiceProvider,
        mockQuotesyProvider,
        mockToastrServiceProvider,
      ],
    });
    service = TestBed.inject(QuoteService);
    quotesy = TestBed.inject(QUOTESY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRandom', () => {
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

    it('should execute API to get random quote', waitForAsync(inject([ QuoteApiService ], quotesApi => {
      service.hasApiUrl = true;
      const spyQuotesy = spyOn(quotesy, 'random').and.returnValue(mockQuote);
      const spy = spyOn(quotesApi, 'getRandom').and.returnValue(of(mockQuote));

      service.getRandom().subscribe(quote => {
        expect(spyQuotesy).not.toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
        expect(quote).toEqual(mockQuote);
      });
    })));

    it('should execute API and emit error', inject([ QuoteApiService ], quotesApi => {
      service.hasApiUrl = true;
      spyOn(quotesApi, 'getRandom').and.returnValue(throwError(mockError));

      service.getRandom().subscribe(
        () => {},
        err => {
          expect(err).toEqual(mockError);
        },
      );
    }));
  });
  describe('share', () => {
    it('should call share API', inject([ QuoteApiService, ToastrService ], (quoteApi, toastrService) => {
      const toastrSpy = spyOn(toastrService, 'success');
      const spy = spyOn(quoteApi, 'share').and.returnValue({});

      service.hasShareApiUrl = true;
      service.share({} as Quote, {} as ContactData);

      service.hasShareApiUrl = false;
      service.share({} as Quote, {} as ContactData).subscribe(() => {
        expect(toastrSpy).toHaveBeenCalled();
      });
      expect(spy).toHaveBeenCalledTimes(1);
    }));
  });

  describe('edit', () => {
    it('should call edit API', inject([ QuoteApiService, ToastrService ], (quoteApi, toastrService) => {
      const spy = spyOn(quoteApi, 'edit').and.returnValue(of(mockQuote));
      const toastrSpy = spyOn(toastrService, 'success');

      service.edit(mockQuote).subscribe(() => {
        expect(toastrSpy).toHaveBeenCalled();
      });

      expect(spy).toHaveBeenCalledWith(mockQuote);
    }));

    it('should call edit API and emit error', inject([ QuoteApiService ], quoteApi => {
      const spy = spyOn(quoteApi, 'edit').and.returnValue(throwError(mockError));

      service.edit(mockQuote).subscribe(
        () => {
        },
        err => {
          expect(err).toEqual(mockError);
        },
      );

      expect(spy).toHaveBeenCalledWith(mockQuote);
    }));
  });

  describe('create', () => {
    it('should call create API', inject([ QuoteApiService, ToastrService ], (quoteApi, toastrService) => {
      const spy = spyOn(quoteApi, 'create').and.returnValue(of(mockQuote));
      const toastrSpy = spyOn(toastrService, 'success');

      service.create(mockQuote).subscribe(() => {
        expect(toastrSpy).toHaveBeenCalled();
      });

      expect(spy).toHaveBeenCalledWith(mockQuote);
    }));

    it('should call create API and emit error', inject([ QuoteApiService ], quoteApi => {
      const spy = spyOn(quoteApi, 'create').and.returnValue(throwError(mockError));

      service.create(mockQuote).subscribe(
        () => {
        },
        err => {
          expect(err).toEqual(mockError);
        },
      );

      expect(spy).toHaveBeenCalledWith(mockQuote);
    }));
  });

  describe('delete', () => {
    it('should call delete API', inject([ QuoteApiService, ToastrService ], (quoteApi, toastrService) => {
      const spy = spyOn(quoteApi, 'delete').and.returnValue(of(mockQuote));
      const toastrSpy = spyOn(toastrService, 'success');

      service.delete(mockQuote.id).subscribe(() => {
        expect(toastrSpy).toHaveBeenCalled();
      });

      expect(spy).toHaveBeenCalledWith(mockQuote.id);
    }));

    it('should call delete API and emit error', inject([ QuoteApiService ], quoteApi => {
      const spy = spyOn(quoteApi, 'delete').and.returnValue(throwError(mockError));

      service.delete(mockQuote.id).subscribe(
        () => {
        },
        err => {
          expect(err).toEqual(mockError);
        },
      );

      expect(spy).toHaveBeenCalledWith(mockQuote.id);
    }));
  });

  describe('getById', () => {
    it('should call getById API', inject([ QuoteApiService ], quoteApi => {
      const spy = spyOn(quoteApi, 'getById').and.returnValue(of(mockQuote));

      service.getById(mockQuote.id).subscribe(() => {
        expect(spy).toHaveBeenCalled();
      });

      expect(spy).toHaveBeenCalledWith(mockQuote.id);
    }));

    it('should call getById API and emit error', inject([ QuoteApiService ], quoteApi => {
      const spy = spyOn(quoteApi, 'getById').and.returnValue(throwError(mockError));

      service.getById(mockQuote.id).subscribe(
        () => {
        },
        err => {
          expect(err).toEqual(mockError);
        },
      );

      expect(spy).toHaveBeenCalledWith(mockQuote.id);
    }));
  });

  describe('getAll', () => {
    it('should call getAll API', inject([ QuoteApiService ], quoteApi => {
      service.hasApiUrl = true;

      const spy = spyOn(quoteApi, 'getAll').and.returnValue(of([ mockQuote ]));

      service.getAll().subscribe();

      expect(spy).toHaveBeenCalled();
    }));

    it('should call getAll API and emit error', inject([ QuoteApiService ], quoteApi => {
      service.hasApiUrl = true;

      const spy = spyOn(quoteApi, 'getAll').and.returnValue(throwError(mockError));

      service.getAll().subscribe(
        () => {
        },
        err => {
          expect(err).toEqual(mockError);
        },
      );

      expect(spy).toHaveBeenCalled();
    }));

    it('should execute quotesy to get all quotes', () => {
      service.hasApiUrl = false;

      const spy = spyOn(quotesy, 'parse_json').and.returnValue([]);

      service.getAll().subscribe(() => {
        expect(spy).toHaveBeenCalled();
      });
    });
  });
});
