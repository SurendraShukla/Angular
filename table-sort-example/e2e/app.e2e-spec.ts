import { Angular4CliPage } from './app.po';

describe('angular4-cli App', function() {
  let page: Angular4CliPage;

  beforeEach(() => {
    page = new Angular4CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
