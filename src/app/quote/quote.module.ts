import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  QuoteComponent,
  QuoteContainerComponent,
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
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    QuoteRoutingModule,
    SharedModule,
  ],
})
export class QuoteModule {
}
