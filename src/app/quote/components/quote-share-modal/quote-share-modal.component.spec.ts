import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactData } from '../../../models';
import { ButtonComponent, InputComponent } from '../../../shared/components';
import { mockNgxSmartModalService } from '../../../stub/ngx-smart-modal-service.mock';
import { QuotePreviewComponent, QuoteShareModalComponent, ShareFormComponent } from '../../components';


describe('ShareModalComponent', () => {
  let component: QuoteShareModalComponent;
  let fixture: ComponentFixture<QuoteShareModalComponent>;

  const testQuote = { id: '1', text: 'test quote text', author: 'test' };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [
        InputComponent,
        ButtonComponent,
        QuoteShareModalComponent,
        QuotePreviewComponent,
        ShareFormComponent,
      ],
      providers: [
        mockNgxSmartModalService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteShareModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onShareSubmit', () => {
    it('should set data and close modal on share submit', () => {
      const contractData = {
        email: 'test@test.com',
      } as ContactData;
      const spySetData = spyOn((component as any).modal, 'setData');
      const spyClose = spyOn((component as any).modal, 'close');

      component.quote = { ...testQuote };
      component.onShareSubmit(contractData);

      expect(spySetData).toHaveBeenCalledWith({
        quote: { ...testQuote },
        ...contractData,
      }, true);
      expect(spyClose).toHaveBeenCalled();
    });
  });

  describe('onShareCancel', () => {
    it('should set data to null on modal close', () => {
      const spySetData = spyOn((component as any).modal, 'setData');
      const spyClose = spyOn((component as any).modal, 'close');

      component.onShareCancel();

      expect(spySetData).toHaveBeenCalledWith(null, true);
      expect(spyClose).toHaveBeenCalled();
    });
  });
});
