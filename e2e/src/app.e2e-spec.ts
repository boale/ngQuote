import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Quote App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  describe('Quote', () => {
    beforeEach(() => {
      page.navigateTo();
    });

    it('should display a quote text', () => {
      expect(page.getQuoteText()).toBeDefined();
    });

    it('should display an author of quote', () => {
      expect(page.getQuoteAuthor).toBeTruthy();
    });

    it('should display a refresh btn', () => {
      expect(page.getRefreshQuoteBtn).toBeTruthy();
    });

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
