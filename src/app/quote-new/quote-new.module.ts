import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuoteNewContainerComponent } from './components';

const COMPONENTS = [
  QuoteNewContainerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
  ],
})
export class QuoteNewModule { }
