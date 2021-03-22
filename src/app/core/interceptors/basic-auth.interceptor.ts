import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  private apiBase: string = environment.apiUrls.quote;
  private apiShare: string = environment.apiUrls.share;

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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
