import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgxSmartModalComponent, NgxSmartModalService } from 'ngx-smart-modal';
import { combineLatest, of, race } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { RoutesPaths } from '../../../app-routing.config';
import { ModalIds } from '../../../quote/components/view.models';
import { QuoteService } from '../../../services';
import { TableDataSource, TableHeadColumns } from '../../../shared/components/table/table.models';
import { DeleteQuoteModalComponent } from '../delete-quote-modal/delete-quote-modal.component';
import { getQuoteFromTableDataSource } from '../quotes-list-container/quotes-list-container.models.rules';

@Component({
  selector: 'app-quotes-list-table',
  templateUrl: './quotes-list-table.component.html',
  styleUrls: [ './quotes-list-table.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesListTableComponent {
  @Output() delete = new EventEmitter<string>();
  @Input() data: TableDataSource[];

  columns: TableHeadColumns[] = [
    {
      label: 'Text',
      key: 'text',
    },
    {
      label: 'Author',
      key: 'author',
    },
  ];

  isControlCellAvailable = environment.apiUrls.quote;

  isLoading$ = this.quoteService.isLoading$;

  constructor(
    private router: Router,
    private modalService: NgxSmartModalService,
    private quoteService: QuoteService,
  ) {
    if (this.isControlCellAvailable) {
      this.columns.push({
        label: 'Action',
        key: 'action',
      });
    }
  }

  editQuote(row: TableDataSource) {
    const { id } = getQuoteFromTableDataSource(row);

    this.router.navigate([ `/${ RoutesPaths.quotes }`, RoutesPaths.edit, id ]);
  }

  deleteQuote(row: TableDataSource) {
    const { id } = getQuoteFromTableDataSource(row);

    this.listenToShareModalEvents(this.createAndOpenDeleteQuoteModal(id));
  }

  private createAndOpenDeleteQuoteModal(id: string): NgxSmartModalComponent {
    return this.modalService
      .create<DeleteQuoteModalComponent>(ModalIds.deleteQuote, DeleteQuoteModalComponent)
      .setData(id)
      .open();
  }

  private listenToShareModalEvents(modal: NgxSmartModalComponent): void {
    // Listen to modal result
    combineLatest([
      modal.onClose,
      modal.onDataAdded,
    ]).pipe(
      switchMap(([ , id ]: [ any, any ]) => {
        if (id) {
          this.delete.emit(id);
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
        tap(() => this.modalService.removeModal(ModalIds.deleteQuote)),
      ).subscribe();
  }

}
