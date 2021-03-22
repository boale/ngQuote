import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { User } from '../auth/models/auth.model';
import { ApiResponse, AuthData } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiBase: string = environment.apiUrls.auth;

  constructor(
    private http: HttpClient,
  ) {
  }

  login<T = AuthData>(user: User): Observable<ApiResponse<T>> {
    const url = `${ this.apiBase }/login`;

    return this.http.post<ApiResponse<T>>(url, user);
  }

  logout(): Observable<ApiResponse<any>> {
    const url = `${ this.apiBase }/logout`;

    return this.http.get<ApiResponse<any>>(url);
  }
}
