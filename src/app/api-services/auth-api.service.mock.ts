import { Observable, of } from 'rxjs';

import { AuthApiService } from './auth-api.service';

export class MockAuthApiService {
  login(): Observable<any> {
    return of();
  }

  logout(): Observable<any> {
    return of();
  }
}

export const mockAuthApiServiceProvider = {
  provide: AuthApiService,
  useClass: MockAuthApiService,
};
