import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../../environments/environment';
import { AuthService } from '../services';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!environment.isAuthorizationEnabled) {
      return true;
    }

    const user = this.authService.authDataValue;
    if (user) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([ 'auth', 'login' ], { queryParams: { returnUrl: state.url } });

    return false;
  }
}
