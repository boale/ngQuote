import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mockQuoteStoreFacadeProvider } from '../../store/quote.facade.mock';

import { MockQuoteComponent } from '../quote/quote.component.mock';

import { QuoteContainerComponent } from './quote-container.component';

describe('QuoteContainerComponent', () => {
  let component: QuoteContainerComponent;
  let fixture: ComponentFixture<QuoteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteContainerComponent, MockQuoteComponent ],
      providers: [ mockQuoteStoreFacadeProvider ],
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
});
