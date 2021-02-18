import { HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { Quote } from '../models';
import { QuoteApiService } from './quote-api.service';

describe('QuoteApiService', () => {
  let service: QuoteApiService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });

    service = TestBed.inject(QuoteApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });

  describe('API interactions', () => {
    const mockQuote: Quote = { text: 'text', author: 'test' };
    const mockQuotes: Quote[] = [ mockQuote ];

    afterEach(() => {
      httpMock.verify();
    });

    it('should getAll quotes', () => {
      const url = `${ environment.apiUrls.quote }/quotes`;
      const response: Quote[] = mockQuotes;

      service.getAll().subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('GET');
      expect(mockReq.request.url).toEqual(url);
    });

    it('should getRandom quote', () => {
      const url = `${ environment.apiUrls.quote }/quotes/random`;
      const response: Quote = mockQuote;

      service.getRandom().subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('GET');
      expect(mockReq.request.url).toEqual(url);
    });

    it('should getRandom quote by tag', () => {
      const url = `${ environment.apiUrls.quote }/quotes/random-by-tag`;
      const response: Quote = mockQuote;
      const testTag = 'tag';

      service.getRandomByTag(testTag).subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(`${ url }?tag=${ testTag }`);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('GET');
      expect(mockReq.request.url).toEqual(url);
      expect(mockReq.request.params).toEqual(new HttpParams({ fromObject: { tag: testTag } }));
    });

    it('should share quote', () => {
      const url = `${ environment.apiUrls.share }/share`;
      const response = {};

      service.share(mockQuote).subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('POST');
      expect(mockReq.request.url).toEqual(url);
      expect(mockReq.request.body).toEqual({
        quote: {
          ...mockQuote,
        },
      });
    });

    it('should create quote', () => {
      const url = `${ environment.apiUrls.share }/quotes`;
      const response = {};

      service.create(mockQuote).subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('POST');
      expect(mockReq.request.url).toEqual(url);
      expect(mockReq.request.body).toEqual({
        quote: {
          ...mockQuote,
        },
      });
    });

    it('should delete quote', () => {
      const url = `${ environment.apiUrls.share }/quotes`;
      const response = {};

      service.delete(mockQuote).subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('DELETE');
      expect(mockReq.request.url).toEqual(url);
    });

    it('should edit quote', () => {
      const url = `${ environment.apiUrls.share }/quotes`;
      const response = {};

      service.edit(mockQuote).subscribe(data => {
        expect(data).toEqual(response);
      });

      const mockReq = httpMock.expectOne(url);

      mockReq.flush(response);

      expect(mockReq.request.method).toBe('PUT');
      expect(mockReq.request.url).toEqual(url);
      expect(mockReq.request.body).toEqual({ ...mockQuote });
    });
  });
});
