import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, InputComponent } from '..';
import { QuoteTagComponent } from './quote-tag.component';

describe('QuoteTagComponent', () => {
  let component: QuoteTagComponent;
  let fixture: ComponentFixture<QuoteTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [
        QuoteTagComponent,
        ButtonComponent,
        InputComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTagComponent);
    component = fixture.componentInstance;
    component.initialData = 'some, test, data';

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getValue', () => {
    it('should return formatted value', () => {
      expect(component.getValue).toBe('some, test, data');
    });
  });

  describe('addTag', () => {
    it('should add empty tag control to the form', () => {
      const pushSpy = spyOn(component.tags, 'push');

      component.addTag();

      expect(pushSpy).toHaveBeenCalled();
    });
  });

  describe('deleteTagById', () => {
    it('should delete tag from the form by id', () => {
      component.form = new FormBuilder().group({
        tag1: 'first',
        tag2: 'second',
        tag3: 'third',
      });
      component.tags = [
        { id: 'tag1', value: 'first' },
        { id: 'tag2', value: 'second' },
        { id: 'tag3', value: 'third' },
      ];
      const expectedResult = [
        { id: 'tag1', value: 'first' },
        { id: 'tag3', value: 'third' },
      ];

      component.deleteTagById('tag2');
      expect(component.tags).toEqual(expectedResult);

      component.deleteTagById('tag5');
      expect(component.tags).toEqual(expectedResult);
    });
  });
});
