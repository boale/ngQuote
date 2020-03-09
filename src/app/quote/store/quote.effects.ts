import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { Quote } from '../models';
import { QuoteService } from '../services';

import { getQuote, setQuote } from './quote.actions';

@Injectable()
export class QuoteEffects {

  getQuote$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getQuote),
      switchMap(() => this.quoteService.getRandom()),
      map((quote: Quote) => setQuote({ quote })),
    );
  });

  constructor(
    private actions$: Actions,
    private quoteService: QuoteService,
  ) {}
}
