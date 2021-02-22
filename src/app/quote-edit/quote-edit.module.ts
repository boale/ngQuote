import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuoteEditContainerComponent } from './components';

const COMPONENTS = [
  QuoteEditContainerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
})
export class QuoteEditModule { }
