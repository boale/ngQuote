import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutesPaths } from '../app-routing.config';
import { QuoteEditContainerComponent } from '../quote-edit/components';
import { QuoteNewContainerComponent } from '../quote-new/components';
import { QuotesListContainerComponent } from '../quotes-list/components';
import { QuoteContainerComponent, QuotePageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: QuotePageComponent,
    children: [
      {
        path: '',
        component: QuoteContainerComponent,
      },
      {
        path: RoutesPaths.quotes,
        children: [
          {
            path: '',
            component: QuotesListContainerComponent,
          },
          {
            path: RoutesPaths.new,
            component: QuoteNewContainerComponent,
          },
          {
            path: ':id',
            component: QuoteContainerComponent,
          },
          {
            path: `${ RoutesPaths.edit }/:id`,
            component: QuoteEditContainerComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class QuoteRoutingModule { }
