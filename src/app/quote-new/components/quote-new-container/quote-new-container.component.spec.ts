import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonComponent, InputComponent, LoaderComponent, QuoteEditFormComponent, TextAreaComponent } from '../../../shared/components';
import { QuoteTagComponent } from '../../../shared/components/quote-tag/quote-tag.component';
import { mockToastrServiceProvider } from '../../../stub';
import { QuoteNewContainerComponent } from './quote-new-container.component';

describe('QuoteNewContainerComponent', () => {
  let component: QuoteNewContainerComponent;
  let fixture: ComponentFixture<QuoteNewContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuoteNewContainerComponent,
        QuoteEditFormComponent,
        InputComponent,
        TextAreaComponent,
        QuoteTagComponent,
        ButtonComponent,
        LoaderComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [
        mockToastrServiceProvider,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
