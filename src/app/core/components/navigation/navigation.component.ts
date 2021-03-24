import { ChangeDetectionStrategy, Component } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { APP_NAVIGATION_CONFIG } from '../../../app-navigation.config';
import { AuthService } from '../../../auth/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  navigationItems = APP_NAVIGATION_CONFIG;
  isAuthenticated = !!this.authService.authDataValue;
  isAuthorizationEnable = environment.isAuthorizationEnabled;

  constructor(
    private authService: AuthService,
  ) {}

  logout(): void {
    this.authService.logout();
  }

}
