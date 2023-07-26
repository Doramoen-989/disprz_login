import * as fs from 'fs'

export class UIPageConfigProvider {

    public parseJson(filename: string): any {

        const filePath = 'test/data/' + filename + '.json';
        try {
            const jsonData = fs.readFileSync(filePath, 'utf-8');
            const parsedData = JSON.parse(jsonData);
            return parsedData;
        }
        catch (IOException) {
            console.log(IOException);
            //   logger.error('Failed to parse JSON file:', error);
            return null;
        }
    }
}