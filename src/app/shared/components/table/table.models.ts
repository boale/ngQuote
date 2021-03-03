export type TableBodyColumnValue = {
  value: any;
}

export interface TableHeadColumns {
  label: string;
  key: string;
}

export interface TableDataSource {
  [ key: string ]: TableBodyColumnValue;
}
