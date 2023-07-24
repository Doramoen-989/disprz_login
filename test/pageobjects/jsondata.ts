import { parseJson } from '../UIConfigurationProvider';
import {PageDataStorage} from '../UIConfigurationProvider';

const loginData = parseJson('login');
const pageDataStorage = new PageDataStorage();
pageDataStorage.addPageData('Login', loginData);
const loginPageData = pageDataStorage.getPageData('Login');

class Jsondata {
public  async actionableElementPath(path: string){
    const elementpath = loginPageData?.actionableElements[path]?.xpath;
    // const elementpath = loginPageData?.actionableElements' + "['" + path + "]'" + '?.xpath'

    return elementpath;
}

}

export default new Jsondata();