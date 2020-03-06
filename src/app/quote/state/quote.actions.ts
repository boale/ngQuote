import { Quote } from '../models';

export enum ActionType {
  getQuote = '[Quote] get quote',
  setQuote = '[Quote] set quote',
}

export class GetQuote {
  static readonly type = ActionType.getQuote;
}

export interface SetQuotePayload {
  quote: Quote;
}

export class SetQuote {
  static readonly type = ActionType.setQuote;

  constructor(public payload: SetQuotePayload) {}
}

