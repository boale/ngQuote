import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SidebarModule } from 'ng-sidebar';

import { BurgerButtonComponent, ButtonComponent } from '../../../shared/components';
import { NavigationComponent } from '../navigation/navigation.component';
import { PrivateLayoutComponent } from './private-layout.component';

@Component({
  template: '<h1>Test page</h1>',
  selector: 'app-test-component',
})
class TestHostComponent {

}

describe('PrivateLayoutComponent', () => {
  let component: PrivateLayoutComponent;
  let fixture: ComponentFixture<PrivateLayoutComponent>;
  let router: Router;

  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ({
      getPropertyValue: prop => {
        return '';
      },
    }),
  });

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'test', component: TestHostComponent },
        ]),
        SidebarModule,
      ],
      declarations: [
        PrivateLayoutComponent,
        NavigationComponent,
        BurgerButtonComponent,
        ButtonComponent,
        TestHostComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleSidebar', () => {
    it('should toggle sidebar', () => {
      expect(component.opened).toBeFalsy();
      component.toggleSidebar();
      expect(component.opened).toBeTruthy();
      component.toggleSidebar();
      expect(component.opened).toBeFalsy();
    });
  });

  describe('listenOnRouteChange', () => {
    it('should close sidebar on router change', done => {
      component.opened = true;
      router.navigate([ 'test' ]).then(() => {
        expect(component.opened).toBeFalsy();
        done();
      });
    });
  });
});
