import { parseAndValidateJson } from '../UIConfigurationProvider';
import {PageDataStorage} from '../UIConfigurationProvider';

const loginData = parseAndValidateJson('login');

class Jsondata {
    public  async actionableElementPath(path: string){
        const elementpath = loginData?.actionableElements[path]?.xpath;
        return elementpath;
    }
    

}

export default new Jsondata();