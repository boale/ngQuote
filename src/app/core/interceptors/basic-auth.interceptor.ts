import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth/services';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private apiBase: string = environment.apiUrls.quote;
  private apiShare: string = environment.apiUrls.share;
  private isAuthorizationEnable: boolean = environment.isAuthorizationEnabled;

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isAuthorizationEnable) {
      return next.handle(request);
    }

    const authData = this.authService.authDataValue;
    const isLoggedIn = authData && authData.access_token;
    const isApiUrl = request.url.startsWith(this.apiBase) || request.url.startsWith(this.apiShare);

    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${authData.access_token}`,
        },
      });
    }

    return next.handle(request);
  }
}
