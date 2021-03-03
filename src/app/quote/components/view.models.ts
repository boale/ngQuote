import { ValidatorFn } from '@angular/forms';

export enum ModalIds {
  quoteShare = 'quoteShare',
  deleteQuote = 'deleteQuote',
}

export interface ShareOption {
  type: string;
  inputType: string;
  title: string;
  placeholder: string;
  validators: ValidatorFn[];
}
