import { Inject, Injectable, InjectionToken } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import quotesy from 'quotesy';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { QuoteApiService } from '../api-services';
import { ContactData, Quote } from '../models';

export const QUOTESY = new InjectionToken('QUOTESY', {
  providedIn: 'root',
  factory: () => quotesy,
});

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  private quote$$ = new BehaviorSubject<Quote>(null);
  quote$: Observable<Quote> = this.quote$$.asObservable().pipe(distinctUntilChanged());

  hasApiUrl = !!environment.apiUrls.quote;
  hasShareApiUrl = !!environment.apiUrls.share;

  constructor(
    private quotesApi: QuoteApiService,
    private toastrService: ToastrService,
    @Inject(QUOTESY) private quotes: any,
  ) {}

  getRandom(): Observable<Quote> {
    this.isLoading$$.next(true);

    return (
      this.hasApiUrl
        ? this.quotesApi.getRandom()
        : of(this.quotes.random())
    ).pipe(
      tap((quote: Quote) => this.emitQuote({ ...quote })),
      tap(() => this.isLoading$$.next(false)),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  getById(id: string): Observable<Quote> {
    this.isLoading$$.next(true);

    return this.quotesApi.getById(id).pipe(
      tap(() => this.isLoading$$.next(false)),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  edit(quote: Quote): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.edit(quote).pipe(
      tap(() => this.isLoading$$.next(false)),
      tap(() => this.toastrService.success('Quote successfully edited.')),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  create(quote: Quote): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.create(quote).pipe(
      tap(() => this.isLoading$$.next(false)),
      tap(() => this.toastrService.success('Quote has been created.')),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  getAll(): Observable<Quote[]> {
    this.isLoading$$.next(true);

    return (
      this.hasApiUrl
        ? this.quotesApi.getAll()
        : of(this.quotes.parse_json())
    ).pipe(
      tap(() => this.isLoading$$.next(false)),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  share(quote: Quote, contactData: ContactData): Observable<any> {
    this.isLoading$$.next(true);

    return this.hasShareApiUrl ?
      this.quotesApi.share(quote, contactData) :
      // eslint-disable-next-line no-console
      of(null).pipe(
        tap(() => console.info('shared: ', quote, contactData)),
        tap(() => this.isLoading$$.next(false)),
        tap(() => this.toastrService.success('Quote has been successfully shared.')),
        catchError((err: any) => {
          this.isLoading$$.next(false);

          return throwError(err);
        }),
      );
  }

  delete(id: string): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.delete(id).pipe(
      tap(() => this.isLoading$$.next(false)),
      tap(() => this.toastrService.success('Quote successfully removed.')),
      catchError((err: any) => {
        this.isLoading$$.next(false);

        return throwError(err);
      }),
    );
  }

  private emitQuote(quote: Quote): void {
    this.quote$$.next({ ...quote });
  }

}
