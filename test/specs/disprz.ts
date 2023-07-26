import LoginPage from '../pageobjects/login.page';
import jsondata from '../pageobjects/jsondata';
import { parseAndValidateJson } from '../UIConfigurationProvider';
import { UIComponentVerifier } from '../disprz/utils/UIComponentVerifier';
import { ActionType } from '../disprz/qaautomation/config/ActionType';
import { waitForDisplayed } from 'webdriverio/build/commands/element';
import { waitUntil } from 'webdriverio/build/commands/browser';

var performActions = new UIComponentVerifier();

const JsonfileData = parseAndValidateJson('login');

let user1 = 'leela' + Math.floor((Math.random() * Date.now()) / 100);

describe('My Login application', () => {
    beforeEach(async () => {
        browser.maximizeWindow();
        await LoginPage.open('');
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
              timeout: 60 * 1000, // 60 seconds
              timeoutMsg: 'Message on failure'
            }
          )
        
    });
    it('should login with valid credentials', async () => {
        // await LoginPage.open('');
        // const userNameElementXPath = await jsondata.actionableElementPath('userName');
        // // const userNameElement = await $(userNameElementXPath).setValue(CredentialsData?.credentials?.username);;
        // const userNameElement = await $(userNameElementXPath).setValue('leelavathi_admin');;
        // const passwordElementXPath = await jsondata.actionableElementPath('password');
        // // const passwordElement = await $(passwordElementXPath).setValue(CredentialsData?.credentials?.password);
        // const passwordElement = await $(passwordElementXPath).setValue('qwe');
        // const signInElementXPath = await jsondata.actionableElementPath('signIn');
        // const signInElement = (await $(signInElementXPath)).click();


        await performActions.performActions('login', 'userName', 'leelavathi_admin');
        console.log('step1 done');

        await performActions.performActions('login', 'password', 'qwe');
        console.log('step 2 is done');

        await performActions.performActions('login', 'signIn', null);
        console.log('step 3 is done');
        browser.pause(10000);

    });
});


