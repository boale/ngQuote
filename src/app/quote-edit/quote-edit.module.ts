import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuoteEditContainerComponent } from './components';
import { QuoteEditRoutingModule } from './quote-edit-routing.module';

const COMPONENTS = [
  QuoteEditContainerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuoteEditRoutingModule,
  ],
})
export class QuoteEditModule { }
