import { browser, by, element } from 'protractor';
import { WebElementPromise } from 'selenium-webdriver';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getQuoteText(): Promise<string> {
    return element(by.css('app-quote-container app-quote  .quote__blockquote p')).getText() as Promise<string>;
  }

  getQuoteAuthor(): Promise<string> {
    return element(by.css('app-quote-container app-quote .quote__blockquote cite')).getText() as Promise<string>;
  }

  getRefreshQuoteBtn(): WebElementPromise {
    return element(by.css('app-quote-container .get-quote-btn')).getWebElement();
  }
}
