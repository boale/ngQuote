import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastrService } from 'ngx-toastr';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services';
import { mockAuthServiceProvider } from '../../auth/services/auth.service.mock';
import { mockToastrServiceProvider } from '../../stub';
import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let httpMock: HttpTestingController;
  const url = `${ environment.apiUrls.quote }/test`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
        mockAuthServiceProvider,
        mockToastrServiceProvider,
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should call logout function if 401 error', waitForAsync(inject(
    [ HttpClient, AuthService, ToastrService ], (http, authService, toastrService) => {
      const logoutSpy = spyOn(authService, 'logout');
      const toastrSpy = spyOn(toastrService, 'error');

      http.get(url).subscribe(() => {
      }, err => {
        expect(logoutSpy).toHaveBeenCalled();
        expect(toastrSpy).toHaveBeenCalled();
      });

      httpMock.expectOne(url).error(
        { message: 'error message' } as ErrorEvent,
        { status: 401 }
      );
    })));

  it('should show error notification', waitForAsync(inject(
    [ HttpClient, AuthService, ToastrService ], (http, authService, toastrService) => {
      const logoutSpy = spyOn(authService, 'logout');
      const toastrSpy = spyOn(toastrService, 'error');

      http.get(url).subscribe(() => {
      }, err => {
        expect(logoutSpy).not.toHaveBeenCalled();
        expect(toastrSpy).toHaveBeenCalled();
      });

      httpMock.expectOne(url).error(
        { message: '' } as ErrorEvent,
        { status: 404, statusText: 'text' },
      );
    })));
});
