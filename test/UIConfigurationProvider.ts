import fs from 'fs';

import winston from 'winston';

const logger = winston.createLogger({
  level: 'error', 
  format: winston.format.combine(
    winston.format.timestamp(), 
    winston.format.printf((info) => {
      return `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`;
    })
  ),
  transports: [new winston.transports.Console()], 
});

export function parseJson(filename : string): any {
  const filePath = 'test/data/' + filename + '.json'; 

  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsedData = JSON.parse(jsonData);
    return parsedData;
  } 
  catch (error) {
    logger.error('Failed to parse JSON file:', error);
    return null;
  }
}

const logindata = parseJson('login');

export interface PageData {
  name: string;
  nonActionableElements: { [key: string]: NonActionableElement };
  actionableElements: { [key: string]: ActionableElement };
}

export interface NonActionableElement {
  disprzComponentType: string;
  xpath: string;
  labelText: {
    en: string;
    fr: string;
  };
}

export interface ActionableElement {
  disprzComponentType: string;
  xpath: string;
  labelText: {
    en: string;
    fr: string;
  };
  action: string;
}

export class PageDataStorage {
  private data: Map<string, PageData>;

  constructor() {
    this.data = new Map<string, PageData>();
  }

  public addPageData(name: string, pageData: PageData): void {
    this.data.set(name, pageData);
  }

  public getPageData(name: string): PageData | undefined {
    const pageData = this.data.get(name);
    if (!pageData) {
      logger.error(`Page data not found for name: ${name}`);
    }
    return pageData;
}
 
  public actionableElementPath(path: string){
      return $('loginPageData?.actionableElements' + [path] + '.xpath');
  }

  public actionableElementAction(path :string){
      const element = 'loginPageData?.actionableElements' + [path];
      const elementpath = $('loginPageData?.actionableElements' + [path] + '.xpath');
      const elementAction = 'loginPageData?.actionableElements' + [path] + '.action';
      switch (elementAction) {
        case 'click':
          'click()';
          break;
        case 'type':
          elementpath.setValue('pasValue');
          break;
        default:
          break;
      }
  }


// const pagedata1 = pageDataStorage;
// // console.log('name is',loginPageData?.name); 
// // console.log(loginPageData?.nonActionableElements['languageSelection']?.labelText.en); 
// // console.log(loginPageData?.actionableElements['forgotPassword']?.xpath); 

// console.log('data is', loginPageData);
// console.log('path is',loginPageData?.nonActionableElements['languageSelection']?.labelText.en);

}


