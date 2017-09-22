import { ClassDirectoryPage } from './app.po';

describe('class-directory App', () => {
  let page: ClassDirectoryPage;

  beforeEach(() => {
    page = new ClassDirectoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
