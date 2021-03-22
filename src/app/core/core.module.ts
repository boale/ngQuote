import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'ng-sidebar';

import { SharedModule } from '../shared/shared.module';
import { AuthLayoutComponent, NavigationComponent, PrivateLayoutComponent } from './components';
import { BasicAuthInterceptor } from './interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

const COMPONENTS = [
  PrivateLayoutComponent,
  AuthLayoutComponent,
  NavigationComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
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
    SidebarModule.forRoot(),
  ],
  exports: [
    ...COMPONENTS,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class CoreModule { }
