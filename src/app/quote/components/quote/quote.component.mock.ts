import { Component, Input } from '@angular/core';

import { Quote } from '../../models';

@Component({
  selector: 'app-quote',
  template: '',
})
export class MockQuoteComponent {
  @Input() quote: Quote;
}
