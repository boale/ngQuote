import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsModule } from '@ngxs/store';

import { QuoteContainerComponent, QuoteComponent } from './components';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteState } from './state';

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
    NgxsModule.forFeature([ QuoteState ]),
  ],
})
export class QuoteModule { }
