import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { of, throwError } from 'rxjs';

import { AuthApiService } from '../../api-services/auth-api.service';
import { mockAuthApiServiceProvider } from '../../api-services/auth-api.service.mock';
import { mockLocalStorage } from '../../stub/local-storage.mock';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  const mockAuthData = {
    token_type: 'Basic',
    access_token: 'test',
  };
  const mockUserData = {
    username: 'test',
    password: '123456',
  };
  const mockError = {
    error: {
      message: 'error message',
      status: 404,
    },
  };

  const mockStorage = mockLocalStorage();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        mockAuthApiServiceProvider,
      ],
    });
    service = TestBed.inject(AuthService);

    Object.defineProperty(window, 'localStorage', {
      value: mockStorage,
    });

    localStorage.setItem('authData', JSON.stringify(mockAuthData));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should set auth data into storage', inject([ AuthApiService ], authApiService => {
      spyOn(authApiService, 'login').and.returnValue(of({
        data: {
          ...mockAuthData,
        },
      }));

      service.login(mockUserData).subscribe(data => {
        expect(data).toEqual({ ...mockAuthData });
      });
    }));

    it('should emit error', inject([ AuthApiService ], authApiService => {
      spyOn(authApiService, 'login').and.returnValue(throwError(mockError));
      service.login(mockUserData).subscribe(
        () => {},
        err => {
          expect(err).toEqual(mockError);
        },
      );
    }));
  });
});
