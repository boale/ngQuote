import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { Quote } from '../../../models';
import { ButtonComponent, InputComponent, QuoteTagComponent, TextAreaComponent } from '../../../shared/components';
import { QuoteEditFormComponent } from './quote-edit-form.component';

describe('QuoteEditFormComponent', () => {
  let component: QuoteEditFormComponent;
  let fixture: ComponentFixture<QuoteEditFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        QuoteEditFormComponent,
        ButtonComponent,
        InputComponent,
        TextAreaComponent,
        QuoteTagComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should emit form value', () => {
      const spy = spyOn(component.submitted, 'emit');

      component.initialData = {
        author: 'Author',
        text: 'Text',
        source: 'Source',
        tags: '',
      } as Quote;
      component.ngOnInit();
      component.editQuoteForm.get('text').setValue('Modified text through form');
      component.quoteTags.form = new FormBuilder().group({
        tag1: 'value1',
        tag2: 'value2',
      });
      component.onSubmit();

      const expectedResult = {
        author: 'Author',
        text: 'Modified text through form',
        source: 'Source',
        tags: 'value1, value2',
      };

      expect(spy).toHaveBeenCalledWith(expectedResult);
    });

    it('should not emit nothing if form is invalid', () => {
      const spy = spyOn(component.submitted, 'emit');

      component.initialData = {
        author: 'Author',
        text: '',
        source: 'Source',
        tags: '',
      } as Quote;
      component.ngOnInit();
      component.quoteTags.form = new FormBuilder().group({
        tag1: 'value1',
        tag2: 'value2',
      });
      component.onSubmit();

      expect(spy).not.toHaveBeenCalled();
    });
  });
});
