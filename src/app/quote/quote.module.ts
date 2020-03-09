import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { QuoteComponent, QuoteContainerComponent } from './components';
import { QuoteRoutingModule } from './quote-routing.module';
import * as fromQuote from './store';

const COMPONENTS = [
  QuoteContainerComponent,
  QuoteComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,

    QuoteRoutingModule,

    StoreModule.forFeature(fromQuote.quoteFeatureKey, fromQuote.reducer),
    EffectsModule.forFeature([fromQuote.QuoteEffects]),
  ],
})
export class QuoteModule { }
