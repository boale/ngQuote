import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoaderComponent, TableComponent } from '../../../shared/components';
import { mockToastrServiceProvider } from '../../../stub';
import { mockNgxSmartModalService } from '../../../stub/ngx-smart-modal-service.mock';
import { QuotesListTableComponent } from '../../components';
import { QuotesListContainerComponent } from './quotes-list-container.component';

describe('QuotesListContainerComponent', () => {
  let component: QuotesListContainerComponent;
  let fixture: ComponentFixture<QuotesListContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuotesListContainerComponent,
        QuotesListTableComponent,
        LoaderComponent,
        TableComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        mockNgxSmartModalService,
        mockToastrServiceProvider,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
