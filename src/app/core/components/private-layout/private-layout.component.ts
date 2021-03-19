import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '../../../auth/services';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: [ './private-layout.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLayoutComponent {
  constructor(
    private authService: AuthService,
  ) {
    this.authService.authData$.subscribe();
  }
}
