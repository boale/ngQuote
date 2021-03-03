import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent, TextAreaComponent } from '../../../shared/components';
import { QuoteEditFormComponent } from './quote-edit-form.component';

describe('QuoteEditFormComponent', () => {
  let component: QuoteEditFormComponent;
  let fixture: ComponentFixture<QuoteEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        QuoteEditFormComponent,
        ButtonComponent,
        InputComponent,
        TextAreaComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
