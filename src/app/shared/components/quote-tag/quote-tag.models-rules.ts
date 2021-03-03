import { FormGroup } from '@angular/forms';

import * as uuid from 'uuid';

import { QuoteTag } from './quote-tag.models';

export function generateUniqueId(): string {
  return uuid.v4();
}

export function getTagsArrayFromString(tags: string, separator = ', '): QuoteTag[] {
  return tags.split(separator).map((tag: string) => ({
    id: generateUniqueId(),
    value: tag,
  }));
}

export function getFormattedTagsFromFormValue(tagForm: FormGroup, separator = ', '): string {
  return Object.entries(tagForm.value)
    .filter(([ _, value ]) => !!value)
    .map(([ _, value ]) => (value as string).replace(/,/g, ''))
    .join(separator);
}
