import {createFeatureSelector, createSelector} from '@ngrx/store';

import { Quote } from '../models';

import { quoteFeatureKey, State, QuoteState } from './quote.reducer';

const quoteFeatureState = createFeatureSelector<State, QuoteState>(quoteFeatureKey);

export const selectOne = (state: QuoteState): Quote =>  state && state.quote;

export const selectQuote = createSelector(
  quoteFeatureState,
  selectOne,
);
