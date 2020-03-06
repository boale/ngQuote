import {Injectable} from '@angular/core';

import { select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

import { getQuote } from './quote.actions';
import * as selectors from './quote.selectors';
import { State } from './quote.reducer';
import { Quote } from '../models';
import * as s from '../../store';
@Injectable({ providedIn: 'root' })
export class QuoteStoreFacade {

  quote$: Observable<Quote> = this.store.pipe(
    select(selectors.selectQuote),
    filter<Quote>(Boolean),
  );

  constructor(private store: Store<State>) {}

  getQuote(): void {
    this.store.dispatch(getQuote());
  }

}
