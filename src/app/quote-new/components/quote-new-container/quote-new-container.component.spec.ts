import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonComponent, InputComponent, QuoteEditFormComponent, TextAreaComponent } from '../../../shared/components';
import { QuoteTagComponent } from '../../../shared/components/quote-tag/quote-tag.component';
import { QuoteNewContainerComponent } from './quote-new-container.component';

describe('QuoteNewContainerComponent', () => {
  let component: QuoteNewContainerComponent;
  let fixture: ComponentFixture<QuoteNewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuoteNewContainerComponent,
        QuoteEditFormComponent,
        InputComponent,
        TextAreaComponent,
        QuoteTagComponent,
        ButtonComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
