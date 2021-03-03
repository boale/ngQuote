import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { RoutesPaths } from 'app/app-routing.config';
import { NgxSmartModalService } from 'ngx-smart-modal';

import { TableComponent } from '../../../shared/components';
import { TableDataSource } from '../../../shared/components/table/table.models';
import { NgxSmartModalServiceMock } from '../../../stub';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        QuotesListTableComponent,
        TableComponent,
      ],
      providers: [
        { provide: NgxSmartModalService, useClass: NgxSmartModalServiceMock },
      ],
    })
      .compileComponents();
  });

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

  describe('deleteQuote', () => {
    it('should delete quote', () => {
      component.deleteQuote(mockRow);
    });
  });
});
