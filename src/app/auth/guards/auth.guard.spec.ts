import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { environment } from '../../../environments/environment';
import { AuthLayoutComponent } from '../../core/components';
import { AuthService } from '../services';
import { mockAuthServiceProvider } from '../services/auth.service.mock';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  const mockAuthData = {
    token_type: 'Basic',
    access_token: 'test',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'auth/login', component: AuthLayoutComponent },
        ]),
        HttpClientTestingModule,
      ],
      declarations: [
        AuthLayoutComponent,
      ],
      providers: [
        AuthGuard,
        mockAuthServiceProvider,
      ],
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow navigation', inject([ AuthService ], authService => {
    environment.isAuthorizationEnabled = true;
    authService.authData$$.next(mockAuthData);
    expect(guard.canActivate({ url: [] } as any, { url: '' } as any)).toBeTruthy();
  }));

  it('should not allow navigation', inject([ AuthService ], authService => {
    authService.authData$$.next(null);
    expect(guard.canActivate({ url: [] } as any, { url: '' } as any)).toBeFalsy();
  }));
});
