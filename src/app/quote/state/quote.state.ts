import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Quote } from '../models';

import { QuoteService } from '../services';

import * as quoteActions from './quote.actions';

export const quoteStateFeatureKey = 'quote';

export interface QuoteStateModel {
  quote: Quote;
  loading: boolean;
  loaded: boolean;
}

@Injectable()
@State<QuoteStateModel>({
  name: quoteStateFeatureKey,
  defaults: {
    quote: null,
    loading: false,
    loaded: false,
  },
})
export class QuoteState {

  constructor(private quoteService: QuoteService) {}

  @Selector()
  static quote(state: QuoteStateModel): Quote {
    return state.quote ? { ...state.quote } : state.quote;
  }

  @Action(quoteActions.GetQuote)
  getQuote(ctx: StateContext<QuoteStateModel>): Observable<any> {
    const state = ctx.getState();

    ctx.patchState({
      ...state,
      loaded: false,
      loading: true,
    });

    return this.quoteService.getRandom().pipe(
      switchMap((quote: Quote) => ctx.dispatch(new quoteActions.SetQuote({ quote }))),
    );
  }

  @Action(quoteActions.SetQuote)
  setQuote(ctx: StateContext<QuoteStateModel>, { payload: { quote }}: quoteActions.SetQuote): any {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      quote,
      loading: false,
      loaded: true,
    });
  }
}
