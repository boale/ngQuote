import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { environment } from '../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class LoginPageGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!environment.isAuthorizationEnabled) {
      this.router.navigate([ '/' ]);

      return false;
    }

    return true;
  }
}
