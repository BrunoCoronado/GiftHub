import { browser, by, element, ExpectedConditions } from 'protractor';

export class LoginPage {
  constructor() {
  }

  navigateTo() {
    // Navigate to the login page of the app
    return browser.get('/');
  }
  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }


  //aqui vamos a poner toda la lógica para encontrar los elementos
  rootElement(){
    return element(by.css('app-login'));
  }

  getHeadingText(){
    //return element(by.css('app-login > ion-title h2'));
    return element(by.id('title'));
  }

  getRegistrationButton(){
    return element(by.id('registrationbutton'))
  }

  getRegistrationPage(){
    return element(by.css('app-registro'));
  }

  getCargaMasivaPage(){
    return element(by.css('app-cargamasiva'));
  }

  enterEmail(correo:string){
    const el = element(by.id('login-email'));
    el.sendKeys(correo);
  }

  enterPassword(password:string){
    const el = element(by.id('login-pass'));
    el.sendKeys(password);
  }

  clickSignIn(){
    const el = element(by.id('signin-button'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getErrorMessage(){
    return element(by.id('error_message')).getText();
  }

}
