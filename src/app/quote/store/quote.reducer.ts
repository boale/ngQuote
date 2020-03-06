import { createReducer, on, Action } from '@ngrx/store';

import * as QuoteActions from './quote.actions';
import {Quote} from '../models';

export const quoteFeatureKey = 'quote';

export interface QuoteState {
  quote: Quote;
  loading?: boolean;
  loaded?: boolean;
}

export interface State extends fromRoot.State {
  [quoteFeatureKey]: QuoteState;
}
import * as fromRoot from '../../store';


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
