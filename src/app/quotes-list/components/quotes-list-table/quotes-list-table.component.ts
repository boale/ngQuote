import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Quote } from '../../../quote/models';

@Component({
  selector: 'app-quotes-list-table',
  templateUrl: './quotes-list-table.component.html',
  styleUrls: [ './quotes-list-table.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuotesListTableComponent implements OnInit {

  @Input() quotes: Quote[];

  constructor() { }

  ngOnInit(): void {
  }

}
