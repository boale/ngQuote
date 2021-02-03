import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Quote } from '../../models';
import { QuoteComponent } from './quote.component';

const mockQuote: Quote = {
  text: 'test quote text',
  author: 'me',
};

@Component({
  template: '<app-quote [quote]="quote"></app-quote>',
})
export class TestHostQuoteComponent {
  quote: Quote = mockQuote;
}

describe('QuoteComponent', () => {
  let component: TestHostQuoteComponent;
  let quoteComponentElem;
  let fixture: ComponentFixture<TestHostQuoteComponent>;

  const getQuoteDebugElement = () => fixture.debugElement.query(By.css('.quote'));
  const getBlockquoteTextDebugElement = () => fixture.debugElement.query(By.css('blockquote p'));
  const getQuoteAuthorDebugElement = () => fixture.debugElement.query(By.css('cite'));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteComponent, TestHostQuoteComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render quote component if quote has not been provided', () => {
    component.quote = null;
    fixture.detectChanges();

    quoteComponentElem = getQuoteDebugElement();

    expect(quoteComponentElem).toBeFalsy();
  });

  it('should render quote component', () => {
    quoteComponentElem = getQuoteDebugElement();

    expect(quoteComponentElem).toBeTruthy();
  });

  it('should contain quote text', () => {
    const quoteText = getBlockquoteTextDebugElement().nativeElement.innerText;
    expect(quoteText).toContain(mockQuote.text);
  });

  it('should contain quote authoe', () => {
    const quoteAuthor = getQuoteAuthorDebugElement().nativeElement.innerText;
    expect(quoteAuthor).toContain(mockQuote.author);
  });

});
