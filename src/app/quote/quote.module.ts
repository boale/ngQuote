import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuoteComponent, QuoteContainerComponent } from './components';

import { QuoteRoutingModule } from './quote-routing.module';

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
  ],
})
export class QuoteModule { }
