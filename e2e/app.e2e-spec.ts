import { IrtIoPage } from './app.po';

describe('irt-io App', () => {
  let page: IrtIoPage;

  beforeEach(() => {
    page = new IrtIoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
