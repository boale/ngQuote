import { Component, Input } from '@angular/core';

import { Quote } from '../../models';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: [ './quote.component.scss' ],
})
export class MockQuoteComponent {
  @Input() quote: Quote;
}
