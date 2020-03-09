import { createAction, props } from '@ngrx/store';
import { Quote } from '../models';

enum ActionType {
  getQuote = '[Quote] get quote',
  setQuote = '[Quote] set quote',
}

export const getQuote = createAction(ActionType.getQuote);

export const setQuote = createAction(ActionType.setQuote, props<{ quote: Quote }>());
