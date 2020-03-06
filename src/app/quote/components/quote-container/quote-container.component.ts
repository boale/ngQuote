import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { QuoteService } from '../../services';
import { Quote } from '../../models';
import {QuoteStoreFacade} from '../../store/quote.facade';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.scss']
})
export class QuoteContainerComponent implements OnInit {

  quote$: Observable<Quote> = this.quoteStoreFacade.quote$;

  constructor(private quoteStoreFacade: QuoteStoreFacade) {}

  ngOnInit(): void {
    this.getRandomQuote();
  }

  getRandomQuote(): void {
    this.quoteStoreFacade.getQuote();
  }

}
