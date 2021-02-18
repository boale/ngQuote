import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable, of, race, Subject } from 'rxjs';
import {
  delay,
  filter,
  share,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';

import { Quote } from '../../models';
import { QuoteService } from '../../services';
import { QuoteShareModalComponent } from '../quote-share-modal/quote-share-modal.component';
import { ModalIds } from '../view.models';

@Component({
  selector: 'app-quote-container',
  templateUrl: './quote-container.component.html',
  styleUrls: [ './quote-container.component.scss' ],
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

  @HostListener('dblclick')
  handleDoubleClick() {
    this.getRandomQuote();
  }

  constructor(
    private quoteService: QuoteService,
    private modalService: NgxSmartModalService,
  ) {}

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

  openShareModal(quote: Quote): void {
    this.listenToShareModalEvents(this.createAndOpenShareModalWithData(quote));
  }

  private createAndOpenShareModalWithData(quote: Quote): NgxSmartModalComponent {
    return this.modalService
      .create<QuoteShareModalComponent>(ModalIds.quoteShare, QuoteShareModalComponent)
      .setData({ quote })
      .open();
  }

  private listenToShareModalEvents(modal: NgxSmartModalComponent): void {
    // Listen to modal result
    combineLatest([
      modal.onClose,
      modal.onDataAdded,
    ]).pipe(
      switchMap(([ , data ]: [ any, any ]) => {
        if (data) {
          const { quote, email, phone } = data;

          return this.quoteService.share(quote, email ? { email } : { phone });
        }

        return of(null);
      }),
      take(1),
    ).subscribe();

    // Destroy modal after its close/dismiss to not duplicate its instances within modalService
    race(
      modal.onCloseFinished,
      modal.onDismissFinished,
    )
      .pipe(
        take(1),
        tap(() => this.modalService.removeModal(ModalIds.quoteShare)),
      ).subscribe();
  }
}
