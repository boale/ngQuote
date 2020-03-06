import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteContainerComponent } from './components';


const routes: Routes = [
  {
    path: '',
    component: QuoteContainerComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class QuoteRoutingModule { }
