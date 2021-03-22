import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap, take, tap } from 'rxjs/operators';

import { RoutesPaths } from '../../../app-routing.config';
import { Quote } from '../../../models';
import { QuoteService } from '../../../services';

@Component({
  selector: 'app-quote-edit-container',
  templateUrl: './quote-edit-container.component.html',
  styleUrls: [ './quote-edit-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteEditContainerComponent {
  private quote$$ = new BehaviorSubject(null);
  quote$ = this.quote$$.asObservable();
  isLoading$ = this.quoteService.isLoading$;

  constructor(
    private activateRouter: ActivatedRoute,
    private quoteService: QuoteService,
    private router: Router,
  ) {
    const { id } = activateRouter.snapshot.params;

    this.getQuoteById(id).subscribe();
  }

  onSubmitted(quote: Quote): void {
    this.quoteService.edit(quote).pipe(
      switchMap(() => this.getQuoteById(quote.id)),
      take(1),
    ).subscribe();
  }

  private getQuoteById(id: string): Observable<Quote> {
    return this.quoteService.getById(id).pipe(
      take(1),
      tap((quote: Quote) => this.quote$$.next(quote)),
      catchError((err: any) => {
        this.router.navigate([ RoutesPaths.quotes ]);

        return throwError(err);
      })
    );
  }

}
