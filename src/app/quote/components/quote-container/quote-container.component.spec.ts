import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSmartModalService } from 'ngx-smart-modal';
import { Observable, of } from 'rxjs';

import { QuoteService } from '../../services';
import { mockQuoteServiceProvider } from '../../services/quote.service.mock';
import { NgxSmartModalServiceMock } from '../../stub';
import { MockQuoteComponent } from '../quote/quote.component.mock';
import { QuoteContainerComponent } from './quote-container.component';

describe('QuoteContainerComponent', () => {
  let component: QuoteContainerComponent;
  let fixture: ComponentFixture<QuoteContainerComponent>;

  const testQuote = { text: 'test quote text', author: 'test' };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteContainerComponent, MockQuoteComponent ],
      providers: [
        mockQuoteServiceProvider,
        { provide: NgxSmartModalService, useClass: NgxSmartModalServiceMock },
      ],
      imports: [ NoopAnimationsModule ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('quote$', () => {

    it('should have a quote$ stream from QuoteService', inject([ QuoteService ], quoteService => {
      expect(component.quote$).toBeDefined();
      expect(component.quote$).toEqual(jasmine.any(Observable));
      expect(component.quote$).toBe(quoteService.quote$);
    }));

    it('should get random quote onInit', inject([ QuoteService ], quoteService => {
      const spy = spyOn(quoteService, 'getRandom').and.returnValue(of({}));

      component.ngOnInit();

      expect(spy).toHaveBeenCalled();
    }));

  });

  describe('isRefreshBtnClicked$', () => {
    it('should have a isRefreshBtnClicked$ stream', () => {
      expect(component.isRefreshBtnClicked$).toBeDefined();
      expect(component.isRefreshBtnClicked$).toEqual(jasmine.any(Observable));
    });

    it('should invoke getRandom method of QuoteService and update status after quote$ has been changes',
      waitForAsync(inject([ QuoteService ], quoteService => {
        const spy = spyOn(quoteService, 'getRandom').and.returnValue(of(testQuote));

        component.getRandomQuote();

        component.isRefreshBtnClicked$.subscribe(isClicked => {
          expect(spy).toHaveBeenCalled();
          expect(isClicked).toBe(false);
        });
      }),
      ));

    it('should stop emitting values on destroy', inject([ QuoteService ], quoteService => {
      const spy = spyOn(quoteService, 'getRandom').and.returnValue(of(testQuote));
      component.ngOnDestroy();
      component.getRandomQuote();

      expect(spy).not.toHaveBeenCalled();
    }));

  });

  describe('events', () => {
    it('should handle dbclick event and invoke getRandomQuote method', () => {
      const spy = spyOn(component, 'getRandomQuote');

      fixture.debugElement.nativeElement.dispatchEvent(new MouseEvent('dblclick', { cancelable: true }));
      fixture.debugElement.nativeElement.dispatchEvent(new MouseEvent('click', { cancelable: true }));

      expect(spy).toHaveBeenCalledTimes(1);
    });

  });

  describe('openShareModal', () => {
    it('should open share modal', inject([ QuoteService ], quoteService => {
      quoteService.hasShareApiUrl = true;
      const spy = spyOn(quoteService, 'share');

      component.openShareModal(testQuote);

      expect(spy).toHaveBeenCalled();
    }));
  });

});
