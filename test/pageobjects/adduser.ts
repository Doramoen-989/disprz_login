import { ChainablePromiseElement } from 'webdriverio';

class AddUser {
  public async login(username: string, password: string, firstname: string) {
    const inputUserID = await $('.combined-input-box[type="text"]');
    await inputUserID.isExisting();
    const inputPassword = await $('input[type="password"][placeholder="Enter your Password"]');
    await inputPassword.isExisting();
    await inputUserID.setValue(username);
    await inputPassword.setValue(password);
    const firstName = await $('input[type="text"][placeholder="Enter Your First Name"]');
    await firstName.isExisting();
    await firstName.setValue(firstname);
    const permissionOfUser = await $('.user-role-type[data-context="2"]');
    await permissionOfUser.isExisting();
    await permissionOfUser.click();
  }

  public async searchLogin(userID: string) {
    const searchUserID = $('input.search-input[placeholder="Search User"]');
    await searchUserID.isExisting();
    await searchUserID.setValue(userID);
  }

  public async searchButton() {
    const clickSearch = await $('//form[@class="search-container"]//button[contains(@class,"search-button")]');
    await clickSearch.isClickable();
    await clickSearch.click();
  }

  public async UploadPhotoOfUser() {
    const UploadPhoto = await $('.selection-options');
    await UploadPhoto.click();
  }

  public async fileupload(file: string) {
    const path = require('path');
    const filePath = path.join('C:/Users/leelavathi.p_disprz/', file);
    const fileInput = await $(`#_harnessLocalFilePicker input[type='file']`);
    browser.execute(
      // assign style to elem in the browser
      // (el) => el.style.display = 'block',
      // pass in element so we don't need to query it again in the browser
      filePath);
    fileInput.setValue(filePath);
  }
}

export default new AddUser();
