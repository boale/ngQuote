import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { ButtonComponent, InputComponent, LoaderComponent } from '../../../shared/components';
import { AuthService } from '../../services';
import { mockAuthServiceProvider } from '../../services/auth.service.mock';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        mockAuthServiceProvider,
      ],
      declarations: [
        LoginFormComponent,
        InputComponent,
        ButtonComponent,
        LoaderComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should login user', inject([ AuthService ], authService => {
      const spy = spyOn(authService, 'login').and.returnValue(of({}));

      component.loginForm = new FormBuilder().group({
        username: 'test',
        password: '123456',
      });
      const expectedParams = {
        username: 'test',
        password: '123456',
      };
      component.onSubmit();

      expect(spy).toHaveBeenCalledWith(expectedParams);
    }));
  });
});
