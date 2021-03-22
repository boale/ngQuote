import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  BurgerButtonComponent,
  ButtonComponent,
  InputComponent,
  LoaderComponent,
  QuoteEditFormComponent,
  QuoteTagComponent,
  TableComponent,
  TextAreaComponent } from './components';
import { TemplateDirective } from './directives';

const COMPONENTS = [
  TableComponent,
  ButtonComponent,
  InputComponent,
  TextAreaComponent,
  LoaderComponent,
  QuoteEditFormComponent,
  QuoteTagComponent,
  BurgerButtonComponent,
];

const DIRECTIVES = [
  TemplateDirective,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
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
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SharedModule { }
