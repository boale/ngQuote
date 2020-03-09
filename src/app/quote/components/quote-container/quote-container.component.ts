import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Quote } from '../../models';
import { QuoteStoreFacade } from '../../state';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: [ './quote-container.component.scss' ],
})
export class QuoteContainerComponent implements OnInit {

  quote$: Observable<Quote> = this.quoteStoreFacade.quote$.pipe(filter<Quote>(Boolean));

  constructor(private quoteStoreFacade: QuoteStoreFacade) { }

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.quoteStoreFacade.getQuote();
  }

}
