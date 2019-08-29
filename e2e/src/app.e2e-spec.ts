import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have heading', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Rechnung Scannen');
  });
});
