import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RoutesPaths } from './app-routing.config';
import { AuthGuard } from './auth/guards';
import { LoginPageGuard } from './auth/guards/login-page.guard';
import { AuthLayoutComponent, PrivateLayoutComponent } from './core/components';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        canActivate: [ AuthGuard ],
        component: PrivateLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./quote/quote.module').then(m => m.QuoteModule),
          },
          {
            path: RoutesPaths.quotes,
            children: [
              {
                path: '',
                loadChildren: () => import('./quotes-list/quotes-list.module').then(m => m.QuotesListModule),
              },
              {
                path: '',
                loadChildren: () => import('./quote-edit/quote-edit.module').then(m => m.QuoteEditModule),
              },
              {
                path: '',
                loadChildren: () => import('./quote-new/quote-new.module').then(m => m.QuoteNewModule),
              },
            ],

          },
        ],
      },
      {
        path: RoutesPaths.auth,
        component: AuthLayoutComponent,
        canActivate: [ LoginPageGuard ],
        children: [
          {
            path: '',
            loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
