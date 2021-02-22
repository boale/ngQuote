import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuotesListContainerComponent, QuotesListTableComponent } from './components';

const COMPONENTS = [
  QuotesListContainerComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    QuotesListTableComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class QuotesListModule { }
