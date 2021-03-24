import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services';
import { mockAuthServiceProvider } from '../../auth/services/auth.service.mock';
import { BasicAuthInterceptor } from './basic-auth.interceptor';

describe('BasicAuthInterceptor', () => {
  let httpMock: HttpTestingController;
  const url = `${environment.apiUrls.quote}/test`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: BasicAuthInterceptor,
          multi: true,
        },
        mockAuthServiceProvider,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add auth headers to request', waitForAsync(inject([ HttpClient, AuthService ], (http, authService) => {
    environment.isAuthorizationEnabled = true;

    http.get(url).subscribe();

    const expectedTokenHeader = `${ authService.authDataValue.token_type } ${ authService.authDataValue.access_token }`;

    httpMock.expectOne(req => {
      expect(req.url).toBe(url);
      expect(req.headers.get('Authorization')).toBe(expectedTokenHeader);

      return true;
    });
  })));

  it('should not add auth headers to request', waitForAsync(inject([ HttpClient, AuthService ], (http, authService) => {
    authService.authData$$.next(null);

    http.get(url).subscribe();

    httpMock.expectOne(req => {
      expect(req.url).toBe(url);
      expect(req.headers.get('Authorization')).toBeNull();

      return true;
    });
  })));

  it('should not add auth headers to request based on env setting',
    waitForAsync(inject([ HttpClient, AuthService ], (http, authService) => {
      environment.isAuthorizationEnabled = false;

      http.get(url).subscribe();

      httpMock.expectOne(req => {
        expect(req.url).toBe(url);
        expect(req.headers.get('Authorization')).toBeNull();

        return true;
      });
    })));
});
