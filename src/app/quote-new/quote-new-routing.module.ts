import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteNewContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'new',
    component: QuoteNewContainerComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class QuoteNewRoutingModule { }
