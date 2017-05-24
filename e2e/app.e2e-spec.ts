import { MultiRegBuilderPage } from './app.po';

describe('multi-reg-builder App', () => {
  let page: MultiRegBuilderPage;

  beforeEach(() => {
    page = new MultiRegBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
