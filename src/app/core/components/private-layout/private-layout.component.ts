import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

import { filter, tap } from 'rxjs/operators';

import { AuthService } from '../../../auth/services';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: [ './private-layout.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent implements AfterViewInit {
  opened = false;
  isAnimated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.listenOnRouteChange();
    this.authService.authData$.subscribe();
  }

  ngAfterViewInit(): void {
    this.isAnimated = true;
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }

  private listenOnRouteChange() {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      tap(() => {
        this.opened = false;
      }),
    ).subscribe();
  }
}
