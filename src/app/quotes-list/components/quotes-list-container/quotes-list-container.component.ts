import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { Quote } from '../../../models';
import { QuoteService } from '../../../services';
import { TableDataSource } from '../../../shared/components/table/table.models';
import { filterDeleted, getTableData } from './quotes-list-container.models.rules';

@Component({
  selector: 'app-quotes-list-container',
  templateUrl: './quotes-list-container.component.html',
  styleUrls: [ './quotes-list-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesListContainerComponent {

  private quotes$$ = new BehaviorSubject<TableDataSource[]>(null);
  quotes$ = this.quotes$$.asObservable();

  constructor(
    private quoteService: QuoteService,
  ) {
    this.getAll().pipe(
      take(1),
    ).subscribe();
  }

  getAll(): Observable<TableDataSource[]> {
    return this.quoteService.getAll().pipe(
      map((quotes: Quote[]) => filterDeleted(quotes)),
      map(getTableData),
      tap((data: TableDataSource[]) => this.quotes$$.next(data)),
    );
  }

  deleteById(id: string): void {
    this.quoteService.delete(id).pipe(
      take(1),
      switchMap(() => this.getAll()),
    ).subscribe();
  }
}
