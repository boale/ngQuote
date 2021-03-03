import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuoteNewContainerComponent } from './components';
import { QuoteNewRoutingModule } from './quote-new-routing.module';

const COMPONENTS = [
  QuoteNewContainerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuoteNewRoutingModule,
  ],
})
export class QuoteNewModule { }
