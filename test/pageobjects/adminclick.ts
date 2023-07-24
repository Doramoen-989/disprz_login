class AdminPage {
  public async switchToIframeAndClick() {
    await browser.waitUntil(async () => {
      const iframeElement = await $('iframe.admin-landing-page');
      return iframeElement.isExisting();
    }, { timeout: 10000 });
    const iframeElement = await $('iframe.admin-landing-page');
    await browser.switchToFrame(iframeElement);
  }

  public async click_functionality(class_name: string, text1: string) {
    const elements = await $$(class_name);
    const timeout = 5000;
  
    for (const element of elements) {
      const exists = await element.waitForExist({ timeout });
      if (exists) {
        const text = await element.getText();
        if (text === text1) {
          console.log('text is', text);
          await element.waitForClickable();
          await element.click();
          return true;
        }
      }
    }
  
    return false;
  }

  public async validating_user(){
    // const elements = await $$('div.listing-row div.cell');
    // console.log('length is', elements);

    const element = await $('div.listing-row div.cell:nth-of-type(3)');
    await element.waitForDisplayed();
    let text = await element.getText();
    console.log('print',text);
    return text;
    
    
  }
  
}
export default new AdminPage();
