import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { getFormattedTagsFromFormValue } from './quote-tag.models-rules';

describe('quote-tag models rules', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
    })
      .compileComponents();
  }));

  describe('getFormattedTagsFromFormValue', () => {
    it('should return formatted string value from tag form', () => {
      const form = new FormBuilder().group({
        control1: 'tag1',
        control2: 'tag2',
        control3: 'tag3',
        control4: 'tag4',
      });

      const expectedResult1 = 'tag1, tag2, tag3, tag4';
      const expectedResult2 = 'tag1. tag2. tag3. tag4';

      expect(getFormattedTagsFromFormValue(form)).toBe(expectedResult1);
      expect(getFormattedTagsFromFormValue(form, '. ')).toBe(expectedResult2);

    });
  });
});
