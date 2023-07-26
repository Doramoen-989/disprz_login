/**
 * Description: Contains Selenium specific methods used for validations
 *
 * @author ArunSundar
 */

export class WebElements {

    /**
     * Description: This method is used to validate if an element is diplayed in the DOM
     *
     * @param xpath
     * @param locatorName
     * @return
     */
    verifyElementIsDisplayed(element) {
        try {
            element.waitForDisplayed();
        }
        catch (Exception) {
            console.log(Exception.getMessage());
            return false;
        }
    }
   
    /**
  * The method is used to Click this element
  *
  * @param element , type: String
  */
    elementClick(element) {
        element.waitForDisplayed()
        element.click()
    }

    /**
     * The method is used to type the input 
     * @param element 
     * @param value 
     */
    sendKeys(element, value) {
        element.waitForDisplayed()
        element.setValue(value)
    }

    /**
     * This method is used to fetch the text from UI 
     * @param element 
     * @returns 
     */
    getTextFromUI(element) {
        element.waitForDisplayed()
        return element.getText()
    }

}