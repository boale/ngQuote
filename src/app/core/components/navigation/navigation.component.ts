import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { APP_NAVIGATION_CONFIG } from '../../../app-navigation.config';
import { AuthService } from '../../../auth/services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: [ './navigation.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  navigationItems = APP_NAVIGATION_CONFIG;
  isAuthenticated = !!this.authService.authDataValue;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }

}
