import { DemoNgServicesPage } from './app.po';

describe('demo-ng-services App', () => {
  let page: DemoNgServicesPage;

  beforeEach(() => {
    page = new DemoNgServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
