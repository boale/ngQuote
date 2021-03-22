import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { QuoteTag } from './quote-tag.models';
import { generateUniqueId, getFormattedTagsFromFormValue, getTagsArrayFromString } from './quote-tag.models-rules';

@Component({
  selector: 'app-quote-tag',
  templateUrl: './quote-tag.component.html',
  styleUrls: [ './quote-tag.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteTagComponent implements OnInit {
  @Input() initialData: string;

  form: FormGroup;
  tags: QuoteTag[] = [];

  get getValue() {
    return getFormattedTagsFromFormValue(this.form);
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.tags = getTagsArrayFromString(this.initialData);

    this.form = this.fb.group({});

    this.tags.forEach((tag: QuoteTag) => {
      this.form.addControl(tag.id, new FormControl(tag.value));
    });
  }

  addTag(): void {
    const uniqueId = generateUniqueId();
    this.form.addControl(uniqueId, new FormControl(''));

    this.tags.push({
      id: uniqueId,
      value: '',
    });
  }

  deleteTagById(id: string): void {
    const index = this.tags.findIndex((tag: QuoteTag) => tag.id === id);

    if (index !== -1) {
      this.tags.splice(index, 1);
      this.form.removeControl(id);
    }
  }

}
