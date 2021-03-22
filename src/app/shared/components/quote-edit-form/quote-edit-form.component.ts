import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Quote } from '../../../models';
import { QuoteTagComponent } from '../quote-tag/quote-tag.component';

@Component({
  selector: 'app-quote-edit-form',
  templateUrl: './quote-edit-form.component.html',
  styleUrls: [ './quote-edit-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteEditFormComponent implements OnInit {
  @ViewChild('quoteTags', { static: false }) quoteTags: QuoteTagComponent;
  @Output() submitted = new EventEmitter<Quote>();

  @Input() initialData: Quote = {
    author: '',
    text: '',
    source: '',
    tags: '',
  } as Quote;

  editQuoteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.editQuoteForm = this.fb.group({
      [ 'author' ]: new FormControl(this.initialData.author, [ Validators.required ]),
      [ 'text' ]: new FormControl(this.initialData.text, [ Validators.required ]),
      [ 'source' ]: new FormControl(this.initialData.source, [ Validators.required ]),
    });
  }

  onSubmit(): void {
    if (this.editQuoteForm.invalid) {
      return;
    }

    this.submitted.emit({
      ...this.initialData,
      ...this.editQuoteForm.value,
      tags: this.quoteTags.getValue,
    });
  }

}
