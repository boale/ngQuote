import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { QuoteComponent, QuoteContainerComponent, QuotePreviewComponent, QuoteShareModalComponent, ShareFormComponent } from './components';
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
    ReactiveFormsModule,
    QuoteRoutingModule,
  ],
})
export class QuoteModule { }
