import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { take, tap } from 'rxjs/operators';

import { RoutesPaths } from '../../../app-routing.config';
import { Quote } from '../../../models';
import { QuoteService } from '../../../services';

@Component({
  selector: 'app-quote-new-container',
  templateUrl: './quote-new-container.component.html',
  styleUrls: [ './quote-new-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteNewContainerComponent implements OnInit {
  isLoading$ = this.quoteService.isLoading$;

  constructor(
    private quoteService: QuoteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createQuote(quote: Quote) {
    this.quoteService.create(quote).pipe(
      take(1),
      tap(() => this.router.navigate([ RoutesPaths.quotes ])),
    ).subscribe();
  }

}
