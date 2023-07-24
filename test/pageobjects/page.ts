
export default class Page {
   
    public async open (path:string) {
         browser.url(`https://qa.disprz.com/`+path);
    }
    public navigation(){
        return browser.url(`https://qa.disprz.com/#!/admin`);
    }
    public user_admin(){
        return browser.url(`https://qa.disprz.com/#!/admin/users`);
    }
}
