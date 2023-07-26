import fs from 'fs';
import winston from 'winston';

/// importing logger 
export const logger = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `[${info.timestamp}] [${info.level.toUpperCase()}]: ${info.message}`;
    })
  ),
  transports: [new winston.transports.Console()],
});

// destructuring the JSON using interface
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

export interface ActionableElement extends NonActionableElement {
  action: string;
}

export class PageDataStorage {
  private readonly data: Map<string, PageData>;

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

  private validatePageData(jsonData: any): PageData {
    if (!jsonData.name || !jsonData.actionableElements || !jsonData.nonActionableElements) {
      throw new Error('JSON file is not in the correct format.');
    }
    return jsonData as PageData;
  }
}

  export function parseAndValidateJson(filename: string): PageData | null {
    const filePath = 'test/data/' + filename + '.json';
  
    try {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(jsonData) as PageData;
    } catch (error) {
      logger.error('Failed to parse JSON file:', error);
      return null;
    }
}
