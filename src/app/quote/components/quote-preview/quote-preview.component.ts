import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Quote } from '../../models';

@Component({
  selector: 'app-quote-preview',
  templateUrl: './quote-preview.component.html',
  styleUrls: [ './quote-preview.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotePreviewComponent {
  @Input() quote: Quote;
}
