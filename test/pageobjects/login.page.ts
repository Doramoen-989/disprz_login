import { ChainablePromiseElement } from 'webdriverio';
import { Browser, Element } from 'webdriverio';

import Page from './page';

class LoginPage extends Page {
  public get inputUsername() {
    return $("//input[contains(@class, 'combined-input-box') and @type='text']");
  }

  public get inputPassword() {
    return $('input.combined-input-box[type="password"]');
  }

  public get btnSubmit() {
    return $('.signin-button-ctr .app-button');
  }

  public async login(username: string, password: string) {
    await (await this.inputUsername).isExisting(); 
    await this.inputUsername.setValue(username);

    await this.inputPassword.isExisting(); 
    await this.inputPassword.setValue(password);

    await this.btnSubmit.waitForClickable(); 
    await this.btnSubmit.click(); 
  }

  public async open(path: string) {
    await browser.url(`https://qa.disprz.com/` + path);
  }
}

export default new LoginPage();
