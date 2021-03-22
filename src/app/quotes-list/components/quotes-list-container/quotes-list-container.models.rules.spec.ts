import { Quote } from '../../../models';
import { filterDeleted, getTableData } from './quotes-list-container.models.rules';

describe('quotes list container models rules', () => {
  const mockQuotes = [
    { id: '1', text: 'text', author: 'author', isDeleted: true },
    { id: '2', text: 'text2', author: 'author2', isDeleted: false },
    { id: '3', text: 'text3', author: 'author3', isDeleted: false },
  ] as Quote[];

  describe('getTableData', () => {
    it('should return table data from quotes', () => {
      const expectedResult = [
        {
          id: {
            value: mockQuotes[ 0 ].id,
          },
          text: {
            value:  mockQuotes[ 0 ].text,
          },
          author: {
            value:  mockQuotes[ 0 ].author,
          },
        },
        {
          id: {
            value: mockQuotes[ 1 ].id,
          },
          text: {
            value:  mockQuotes[ 1 ].text,
          },
          author: {
            value:  mockQuotes[ 1 ].author,
          },
        },
        {
          id: {
            value: mockQuotes[ 2 ].id,
          },
          text: {
            value:  mockQuotes[ 2 ].text,
          },
          author: {
            value:  mockQuotes[ 2 ].author,
          },
        },
      ];

      expect(getTableData(mockQuotes)).toEqual(expectedResult);
    });
  });

  describe('filterDeleted', () => {
    it('should filter deleted quotes', () => {
      expect(filterDeleted(mockQuotes)).toEqual([ mockQuotes[ 1 ], mockQuotes[ 2 ] ]);
    });
  });
});
