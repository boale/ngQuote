import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { QuoteEditModule } from '../quote-edit/quote-edit.module';
import { QuoteNewModule } from '../quote-new/quote-new.module';
import { QuotesListModule } from '../quotes-list/quotes-list.module';
import {
  QuoteComponent,
  QuoteContainerComponent,
  QuotePageComponent,
  QuotePreviewComponent,
  QuoteShareModalComponent,
  ShareFormComponent,
} from './components';
import { QuoteRoutingModule } from './quote-routing.module';

const COMPONENTS = [
  QuoteContainerComponent,
  QuoteComponent,
  QuoteShareModalComponent,
  QuotePreviewComponent,
  ShareFormComponent,
  QuotePageComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    QuotesListModule,
    QuoteRoutingModule,
    QuoteNewModule,
    QuoteEditModule,
  ],
})
export class QuoteModule {
}
