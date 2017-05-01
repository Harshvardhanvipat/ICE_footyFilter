import { FootyFilterPage } from './app.po';

describe('footy-filter App', () => {
  let page: FootyFilterPage;

  beforeEach(() => {
    page = new FootyFilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
