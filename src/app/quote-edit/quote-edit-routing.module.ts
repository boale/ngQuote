import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuoteEditContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'edit/:id',
    component: QuoteEditContainerComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class QuoteEditRoutingModule { }
