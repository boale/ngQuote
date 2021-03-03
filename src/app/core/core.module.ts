import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent, PrivateLayoutComponent } from './components';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { QuoteApiInterceptor } from './interceptors/quote-api.interceptor';

const COMPONENTS = [
  PrivateLayoutComponent,
  AuthLayoutComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    NavigationComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: QuoteApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ...COMPONENTS,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
