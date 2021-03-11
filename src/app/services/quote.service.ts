import { Inject, Injectable, InjectionToken } from '@angular/core';

import quotesy from 'quotesy';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

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
    );
  }

  getById(id: string): Observable<Quote> {
    this.isLoading$$.next(true);

    return this.quotesApi.getById(id).pipe(
      tap(() => this.isLoading$$.next(false)),
    );
  }

  edit(quote: Quote): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.edit(quote).pipe(
      tap(() => this.isLoading$$.next(false)),
    );
  }

  create(quote: Quote): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.create(quote).pipe(
      tap(() => this.isLoading$$.next(false)),
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
    );
  }

  share(quote: Quote, contactData: ContactData): Observable<any> {
    return this.hasShareApiUrl ?
      this.quotesApi.share(quote, contactData) :
      // eslint-disable-next-line no-console
      of(null).pipe(tap(() => console.info('shared: ', quote, contactData)));
  }

  delete(id: string): Observable<any> {
    this.isLoading$$.next(true);

    return this.quotesApi.delete(id).pipe(
      tap(() => this.isLoading$$.next(false)),
    );
  }

  private emitQuote(quote: Quote): void {
    this.quote$$.next({ ...quote });
  }

}
