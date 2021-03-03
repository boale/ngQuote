import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DeleteQuoteModalComponent, QuotesListContainerComponent, QuotesListTableComponent } from './components';
import { QuotesListRoutingModule } from './quotes-list-routing.module';

const COMPONENTS = [
  QuotesListContainerComponent,
  QuotesListTableComponent,
  DeleteQuoteModalComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuotesListRoutingModule,
  ],
})
export class QuotesListModule { }
