import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthApiService } from '../../api-services/auth-api.service';
import { ApiResponse, AuthData } from '../../models';
import { User } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  authData$: Observable<AuthData>;
  isLoading$: Observable<boolean>;
  private authData$$: BehaviorSubject<AuthData>;
  private isLoading$$: BehaviorSubject<boolean>;

  constructor(
    private authApiService: AuthApiService,
    private router: Router,
  ) {
    const authData = localStorage.getItem('authData');

    this.authData$$ = new BehaviorSubject<AuthData>(authData ? JSON.parse(authData) : null);
    this.authData$ = this.authData$$.asObservable();

    this.isLoading$$ = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoading$$.asObservable();
  }

  get authDataValue(): AuthData {
    return this.authData$$.value;
  }

  login(user: User): Observable<AuthData> {
    this.isLoading$$.next(true);

    return this.authApiService.login(user)
      .pipe(
        map(({ data }: ApiResponse<AuthData>) => {
          localStorage.setItem('authData', JSON.stringify(data));
          this.authData$$.next(data);

          return data;
        }),
        tap(() => this.isLoading$$.next(false)),
        catchError((err: any) => {
          this.isLoading$$.next(false);

          return throwError(err);
        })
      );
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('authData');
    this.authData$$.next(null);

    this.router.navigate([ 'auth', 'login' ]);
  }
}
