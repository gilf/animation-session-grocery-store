import { GroceryStorePage } from './app.po';

describe('grocery-store App', () => {
  let page: GroceryStorePage;

  beforeEach(() => {
    page = new GroceryStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
