import LoginPage from '../pageobjects/login.page';
import AdminPage from '../pageobjects/adminclick';
import Adduser from '../pageobjects/adduser';
import { expect } from 'chai';
// import * as fs from 'fs';
import JsonPath from 'C:\\Users\\leelavathi.p_disprz\\Desktop\\disprz_login\\selector.json';
import { addAttachment } from '@wdio/allure-reporter';
import { parseJson } from '../UIConfigurationProvider';
import {PageDataStorage} from '../UIConfigurationProvider';
import jsondata from '../pageobjects/jsondata';

const loginData = parseJson('login');
const pageDataStorage = new PageDataStorage();
pageDataStorage.addPageData('login', loginData);
const CredentialsData = parseJson('credentials');
console.log('data is', CredentialsData);

// pageDataStorage.addPageData('credentials', CredentialsData);
const loginPageData = pageDataStorage.getPageData('Login');
// const credentialsPageData = pageDataStorage.getPageData('credentials');

let user1 = 'leela' + Math.floor((Math.random()*Date.now())/100);

describe('My Login application', () => {
    beforeEach(async () => {
        browser.maximizeWindow();
        await browser.pause(5000);
    });
    it('should login with valid credentials', async () => {
        await LoginPage.open('');
        console.log('test1');
        // await $(loginPageData?.actionableElements['userName']?.xpath).isExisting();
        // $(loginPageData?.actionableElements['userName']?.xpath).setValue('leelavathi_admin');
        // await $(loginData.actionableElements.signIn.xpath).isExisting();
        // $(loginPageData?.actionableElements['password']?.xpath).setValue('qwe');
        // // await LoginPage.login('leelavathi_admin', 'qwe');
        // await $(loginPageData?.actionableElements.signIn.xpath).isExisting();
        // console.log('leela')
        // $(loginPageData?.actionableElements.signIn.xpath).click();
        // await AdminPage.switchToIframeAndClick();

        // const userNameElement = $(loginPageData?.actionableElements['username']?.xpath);

        const userNameElementXPath = await jsondata.actionableElementPath('userName');
        const userNameElement = await $(userNameElementXPath).setValue(CredentialsData?.credentials?.username);;
        const passwordElementXPath = await jsondata.actionableElementPath('password');
        const passwordElement = await $(passwordElementXPath).setValue(CredentialsData?.credentials?.password);
        const signInElementXPath = await jsondata.actionableElementPath('signIn');
        const signInElement = (await $(signInElementXPath)).click();

        // await browser.performActions([
           
        //     { action: 'key', element: userNameElement, value: 'leelavathi_admin' },
        //     { action: 'waitForExist', element: userNameElement },
        //     { action: 'setValue', element: passwordElement, value: 'qwe' },
        //     { action: 'waitForExist', element: signInElement },
        //     { action: 'click', element: signInElement }
        // ]);

    
        // console.log(loginData);
        // await AdminPage.click_functionality(JsonPath.User_Administration,'User Administration');
        // await AdminPage.click_functionality(JsonPath.Users,'Users');
        // await browser.waitUntil(async () => {
        // const currentUrl = await browser.getUrl();
        // return currentUrl === 'https://qa.disprz.com/#!/admin/users';
        // }, { timeout: 10000, 
        // timeoutMsg: 'time out'});
        // await AdminPage.click_functionality(JsonPath.Add_a_new_User_manually, 'Add a new User manually');
        // await Adduser.login(user1, 'qwe', 'leela');
        // await browser.pause(5000);
        // await Adduser.UploadPhotoOfUser();
        // await browser.pause(5000);
        // await Adduser.fileupload('dis.png');
        // await browser.pause(5000);
        // await AdminPage.click_functionality(JsonPath.clicking_Create, 'Create');
    });

    // it('search the user', async() => {
    //     await AdminPage.click_functionality(JsonPath.search_user, 'Search for existing users to view or modify them');
    //     await Adduser.searchLogin(user1);
    //     await Adduser.searchButton();
    //     const check_user = await AdminPage.validating_user();
    //     expect(check_user).to.equals(user1);
    //     await browser.pause(5000);
    // });
});


   