import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from '../../../shared/components';
import { mockNgxSmartModalService } from '../../../stub/ngx-smart-modal-service.mock';
import { DeleteQuoteModalComponent } from './delete-quote-modal.component';

describe('DeleteQuoteModalComponent', () => {
  let component: DeleteQuoteModalComponent;
  let fixture: ComponentFixture<DeleteQuoteModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeleteQuoteModalComponent,
        ButtonComponent,
      ],
      providers: [
        mockNgxSmartModalService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
