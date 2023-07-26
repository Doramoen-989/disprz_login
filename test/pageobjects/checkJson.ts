// import { parseJson } from '../UIConfigurationProvider';
// const loginData = parseJson('login');
// import winston from 'winston';

// if(loginData.name && loginData.actionableElements && loginData.nonActionableElements){

// }

// const logger = winston.createLogger({
//     level: 'error', 
//     format: winston.format.combine(
//       winston.format.timestamp(), 
//       winston.format.printf((info) => {
//         return `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`;
//       })
//     ),
//     transports: [new winston.transports.Console()], 
//   });

// export interface PageData {
//     name: string;
//     nonActionableElements: { [key: string]: NonActionableElement };
//     actionableElements: { [key: string]: ActionableElement };
//   }
  
//   export interface NonActionableElement {
//     disprzComponentType: string;
//     xpath: string;
//     labelText: {
//       en: string;
//       fr: string;
//     };
//   }
  
//   export interface ActionableElement {
//     disprzComponentType: string;
//     xpath: string;
//     labelText: {
//       en: string;
//       fr: string;
//     };
//     action: string;
//   }
  
//   export class PageDataStorage {
//     private data: Map<string, PageData>;
  
//     constructor() {
//       this.data = new Map<string, PageData>();
//     }
  
//     public addPageData(name: string, pageData: PageData): void {
//       this.data.set(name, pageData);
//     }
  
  
//   public hasNameAndActionableElements(name: string): any {
//     const pageData = this.data.get(name);
  
//     const { name: pageName, actionableElements, nonActionableElements } = pageData;
//     if (!pageName && (!actionableElements || Object.keys(actionableElements).length === 0) &&
//         (!nonActionableElements || Object.keys(nonActionableElements).length === 0)) {
//         logger.error(`not proper json file`);
//     }
//     else{
//         return loginData; 
//     }
//     return pageData;
//   }
// }


   