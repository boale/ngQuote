import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Quote } from '../../../models';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: [ './quote.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class QuoteComponent {
  @Input() quote: Quote;
}
