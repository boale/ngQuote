import { Quote } from '../../../models';
import { TableDataSource } from '../../../shared/components/table/table.models';

export function getTableData(data: Quote[]): TableDataSource[] {
  return data.map(({ text, author, id }: Quote) => {
    return {
      id: {
        value: id,
      },
      text: {
        value: text,
      },
      author: {
        value: author,
      },
    };
  });
}

export function getQuoteFromTableDataSource(tableData: TableDataSource): Quote {
  return {
    id: tableData.id.value,
    text: tableData.text.value,
    author: tableData.author.value,
  };
}

export function filterDeleted(quotes: Quote[]): Quote[] {
  return quotes.filter((quote: Quote) => !quote.isDeleted);
}
