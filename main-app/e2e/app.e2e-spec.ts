import { MainAppPage } from './app.po';

describe('main-app App', () => {
  let page: MainAppPage;

  beforeEach(() => {
    page = new MainAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
