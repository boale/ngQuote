import { BehaviorSubject, Observable, of } from 'rxjs';

import { AuthData } from '../../models';
import { AuthService } from './auth.service';

const mockAuthData = {
  token_type: 'Basic',
  access_token: 'test',
};

export class MockAuthService {
  authData$$ = new BehaviorSubject(mockAuthData);

  get authDataValue(): AuthData {
    return this.authData$$.value;
  }

  login(): Observable<any> {
    return of({});
  }

  logout(): Observable<any> {
    return of({});
  }
}

export const mockAuthServiceProvider = {
  provide: AuthService,
  useClass: MockAuthService,
};
