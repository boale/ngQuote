import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Quote } from '../../../quote/models';
import { QuoteService } from '../../../quote/services';

@Component({
  selector: 'app-quotes-list-container',
  templateUrl: './quotes-list-container.component.html',
  styleUrls: [ './quotes-list-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesListContainerComponent implements OnInit {

  quotes$: Observable<Quote[]>;

  constructor(
    private quoteService: QuoteService,
  ) {
    this.quotes$ = this.quoteService.getAll();
  }

  ngOnInit(): void {
  }

}
