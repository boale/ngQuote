import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PrivateLayoutComponent } from './core/components';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: PrivateLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
