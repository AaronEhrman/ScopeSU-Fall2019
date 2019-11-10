import { ScopeSuPage } from './app.po';

describe('scope-su App', function() {
  let page: ScopeSuPage;

  beforeEach(() => {
    page = new ScopeSuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
