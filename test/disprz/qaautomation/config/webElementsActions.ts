
// webElementAction.ts

import { Element } from "webdriverio";

export const webElementAction = {
    verifyElementIsDisplayed: async (locator: string): Promise<boolean> => {
        const element = $(locator);
        let timeout = 10000;
        console.log('waited');
        const exists = (await element).waitForDisplayed({
            timeout
        });
        console.log('exists'); 
        return exists;
      },

  elementClick: async (locator: string): Promise<void> => {
    const element = $(locator);
    let timeout = 5000;
    await element.waitForClickable({timeout});
    await element.click();
  },

  sendKeys: async (locator: string, value: string): Promise<void> => {
    const element = $(locator);
    let timeout = 5000;
    await element.waitForDisplayed({ timeout });
    await element.setValue(value);
    console.log('elemets are passed');
    
    }
  }

//   getTextFromUI: async(element:WebdriverIO.Element ) : Promise<void> => {
//     if (element.isExisting()){
//         await element.getText();
//     }else {
//         throw new Error("Element does not exist on the page.");
//     }
//   }
  





