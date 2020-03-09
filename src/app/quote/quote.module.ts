import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxsModule } from '@ngxs/store';

import { QuoteComponent, QuoteContainerComponent } from './components';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteState } from './state';

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
    NgxsModule.forFeature([ QuoteState ]),
  ],
})
export class QuoteModule { }
