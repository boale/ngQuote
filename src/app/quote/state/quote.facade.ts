import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Select, Store } from '@ngxs/store';

import { Quote } from '../models';

import { GetQuote } from './quote.actions';
import { QuoteState } from './quote.state';

@Injectable({
  providedIn: 'root',
})
export class QuoteStoreFacade {

  @Select(QuoteState.quote) quote$: Observable<Quote>;

  constructor(private store: Store) {}

  getQuote(): void {
    this.store.dispatch(new GetQuote());
  }

}
