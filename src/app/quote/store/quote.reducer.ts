import { Action, createReducer, on } from '@ngrx/store';

import * as fromRoot from '../../store';

import { Quote } from '../models';

import * as QuoteActions from './quote.actions';

export const quoteFeatureKey = 'quote';

export interface QuoteState {
  quote: Quote;
  loading?: boolean;
  loaded?: boolean;
}
export interface State extends fromRoot.State {
  [quoteFeatureKey]: QuoteState;
}

export const initialState: QuoteState = {
  quote: null,
  loading: false,
  loaded: true,
};

const quoteReducers = createReducer(
  initialState,
  on(QuoteActions.getQuote, state => ({ ...state, loaded: false, loading: true })),
  on(QuoteActions.setQuote, (state, { quote }) => ({ ...state, quote, loaded: true, loading: false })),
);

export function reducer(state: QuoteState | undefined, action: Action) {
  return quoteReducers(state, action);
}
