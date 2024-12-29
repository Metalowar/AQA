//import * as path from 'path';

export class BasePage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
  }

  async visitPage() {
    await this.page.goto(this.url);
  }
}