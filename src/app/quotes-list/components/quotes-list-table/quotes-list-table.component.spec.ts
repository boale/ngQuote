import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutesPaths } from '../../../app-routing.config';
import { LoaderComponent, TableComponent } from '../../../shared/components';
import { TableDataSource } from '../../../shared/components/table/table.models';
import { mockToastrServiceProvider } from '../../../stub';
import { mockNgxSmartModalService } from '../../../stub/ngx-smart-modal-service.mock';
import { QuotesListTableComponent } from './quotes-list-table.component';

describe('QuotesListTableComponent', () => {
  let component: QuotesListTableComponent;
  let fixture: ComponentFixture<QuotesListTableComponent>;

  const mockRow = {
    id: {
      value: '1',
    },
    text: {
      value: 'text',
    },
    author: {
      value: 'author',
    },
  } as TableDataSource;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        QuotesListTableComponent,
        TableComponent,
        LoaderComponent,
      ],
      providers: [
        mockNgxSmartModalService,
        mockToastrServiceProvider,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('editQuote', () => {
    it('should redirect to edit page', inject([ Router ], router => {
      const spy = spyOn(router, 'navigate');
      component.editQuote(mockRow);

      expect(spy).toHaveBeenCalledWith([ `/${ RoutesPaths.quotes }`, RoutesPaths.edit, mockRow.id.value ]);
    }));
  });
});
