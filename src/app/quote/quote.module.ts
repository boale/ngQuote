import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { QuoteRoutingModule } from './quote-routing.module';
import * as fromQuote from './store';

import { QuoteContainerComponent, QuoteComponent } from './components';

const COMPONENTS = [
  QuoteContainerComponent,
  QuoteComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,

    QuoteRoutingModule,

    StoreModule.forFeature(fromQuote.quoteFeatureKey, fromQuote.reducer),
    EffectsModule.forFeature([fromQuote.QuoteEffects])
  ],
})
export class QuoteModule { }
