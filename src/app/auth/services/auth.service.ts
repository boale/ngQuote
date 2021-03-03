import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthApiService } from '../../api-services/auth-api.service';
import { ApiResponse, AuthData } from '../../models';
import { User } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authData$$: BehaviorSubject<AuthData>;
  public authData$: Observable<AuthData>;

  constructor(
    private authApiService: AuthApiService,
    private router: Router,
  ) {
    this.authData$$ = new BehaviorSubject<AuthData>(JSON.parse(localStorage.getItem('authData')));
    this.authData$ = this.authData$$.asObservable();
  }

  public get authDataValue(): AuthData {
    return this.authData$$.value;
  }

  login(user: User): Observable<AuthData> {
    return this.authApiService.login(user)
      .pipe(map(({ data }: ApiResponse<AuthData>) => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        localStorage.setItem('authData', JSON.stringify(data));
        this.authData$$.next(data);

        return data;
      }));
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('authData');
    this.authData$$.next(null);

    this.router.navigate([ 'auth', 'login' ]);
  }
}
