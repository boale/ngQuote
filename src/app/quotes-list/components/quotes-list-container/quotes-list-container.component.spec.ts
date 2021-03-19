import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { mockNgxSmartModalService } from 'app/stub/ngx-smart-modal-service.mock';

import { LoaderComponent } from '../../../shared/components';
import { mockToastrService } from '../../../stub';
import { QuotesListTableComponent } from '../../components';
import { QuotesListContainerComponent } from './quotes-list-container.component';

describe('QuotesListContainerComponent', () => {
  let component: QuotesListContainerComponent;
  let fixture: ComponentFixture<QuotesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuotesListContainerComponent,
        QuotesListTableComponent,
        LoaderComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        mockNgxSmartModalService,
        mockToastrService,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
