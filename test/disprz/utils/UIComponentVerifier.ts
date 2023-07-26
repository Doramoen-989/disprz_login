/**
 * Description: Class to handle the Selenium actions for the actionable and non-actionable components.
 * author - ArunSundar
 */
import { WebElements } from "../qaautomation/WebElements";
import {ActionType} from "../qaautomation/config/ActionType";
import { parseAndValidateJson } from '../qaautomation/config/verifyJson'
import { webElementAction } from "../qaautomation/config/webElementsActions";

/**
 * UI UIComponentVerifier for easy to use methods.
 */
export class UIComponentVerifier {
    webElem = new WebElements();

    public async performActions(jsonpageName:string, actionableElement:any, testData:string) {
        const jsonData =  parseAndValidateJson(jsonpageName);
        console.log('json is correct');
        
        if(jsonData){
        const elementAction = jsonData?.actionableElements[actionableElement]?.action;
        console.log('action is', elementAction);
        
        const locator = jsonData?.actionableElements[actionableElement]?.xpath;
        console.log('locator is', locator);
        
        switch (elementAction) {
            case ('Type'):
                console.log('success');
                const elementStatus = await webElementAction.verifyElementIsDisplayed(locator);
                console.log('element status is', elementStatus);
                
                if (elementStatus) {
                    await webElementAction.sendKeys(locator, testData);
                    // report.reportPass("The Component " + componentName + " is visible and Type action is performed");
                } else {
                    // report.reportFail("The Component " + componentName + " is not visible and Type action not performed");
                    console.log('keys are not able to sent');
                    
                }

                break;
            case ('Click'):
                if (await webElementAction.verifyElementIsDisplayed(locator)) {
                    // this.webElem.verifyElementIsEnabled(locator);
                    await webElementAction.elementClick(locator);
                    // report.reportPass("The Component " + componentName + " is visible and Click action is performed");
                } else {
                    // report.reportFail("The Component " + componentName + " is not visible and Click action not performed");
                }
                break;
        }
    }
    }
}