import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import {
  ButtonComponent,
  InputComponent,
  LoaderComponent,
  QuoteEditFormComponent,
  QuoteTagComponent,
  TextAreaComponent,
} from '../../../shared/components';
import { mockToastrServiceProvider } from '../../../stub';
import { QuoteEditContainerComponent } from './quote-edit-container.component';

describe('QuoteEditContainerComponent', () => {
  let component: QuoteEditContainerComponent;
  let fixture: ComponentFixture<QuoteEditContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [
        QuoteEditContainerComponent,
        QuoteEditFormComponent,
        LoaderComponent,
        InputComponent,
        TextAreaComponent,
        QuoteTagComponent,
        ButtonComponent,
      ],
      providers: [
        mockToastrServiceProvider,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
