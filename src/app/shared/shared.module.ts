import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent, LoaderComponent, QuoteEditFormComponent, TableComponent, TextAreaComponent } from './components';
import { QuoteTagComponent } from './components/quote-tag/quote-tag.component';
import { TemplateDirective } from './directives';

const COMPONENTS = [
  TableComponent,
  ButtonComponent,
  InputComponent,
  TextAreaComponent,
  LoaderComponent,
  QuoteEditFormComponent,
];

const DIRECTIVES = [
  TemplateDirective,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    QuoteTagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,

    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
