import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../../auth/services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.authService.logout();
        }
        const error = err.error.message || err.statusText;
        const defaultErrorMessage = 'Sorry, but something went wrong, please try again.';

        this.toastrService.error(defaultErrorMessage);

        return throwError(error);
      }));
  }
}
