import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { delay, filter, share, switchMap, take, takeUntil, tap } from 'rxjs/operators';

import { Quote } from '../../models';
import { QuoteService } from '../../services';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: ['./quote-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('isClicked', [
      state('isClicked', style({ transform: 'rotate(360deg)' })),
      transition('* => isClicked', animate('300ms ease-out')),
    ]),
  ],
})
export class QuoteContainerComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  private isRefreshBtnClicked$$ = new BehaviorSubject<boolean>(false);
  isRefreshBtnClicked$ = this.isRefreshBtnClicked$$.asObservable().pipe(share());

  quote$: Observable<Quote> = this.quoteService.quote$;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (['Enter', '13'].includes(event.code)) {
      this.getRandomQuote();
    }
  }

  @HostListener('dblclick')
  handleDoubleClick() {
    this.getRandomQuote();
  }

  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService.getRandom().pipe(take(1)).subscribe();

    this.quote$.pipe(
      takeUntil(this.destroy$),
      delay(300),
      tap(() => this.isRefreshBtnClicked$$.next(false)),
    ).subscribe();

    this.isRefreshBtnClicked$.pipe(
      takeUntil(this.destroy$),
      filter(Boolean),
      switchMap(() => this.quoteService.getRandom()),
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getRandomQuote(): void {
    this.isRefreshBtnClicked$$.next(true);
  }

}
