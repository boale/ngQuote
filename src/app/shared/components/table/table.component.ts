import { ChangeDetectionStrategy, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

import { TemplateDirective } from '../../directives';
import { TableDataSource, TableHeadColumns } from './table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @ContentChildren(TemplateDirective) set contentChildren(queryList: QueryList<TemplateDirective>) {
    if (!queryList.length) {
      return;
    }

    this.templateRefList = queryList.toArray().reduce(
      (buf: any, templateDirective: TemplateDirective) => ({
        ...buf,
        [ templateDirective.name ]: templateDirective.template,
      }), {});
  }
  templateRefList: any;

  @Input() tableData: TableDataSource[] = [];
  @Input() columns: TableHeadColumns[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
