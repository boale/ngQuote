import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartModalService } from 'ngx-smart-modal';

import { NgxSmartModalServiceMock } from '../../../stub';
import { DeleteQuoteModalComponent } from './delete-quote-modal.component';

describe('DeleteQuoteModalComponent', () => {
  let component: DeleteQuoteModalComponent;
  let fixture: ComponentFixture<DeleteQuoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteQuoteModalComponent ],
      providers: [
        { provide: NgxSmartModalService, useClass: NgxSmartModalServiceMock },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteQuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
