import { browser, by, element, ExpectedConditions } from 'protractor';

export class RegistroPage {
  constructor() {
  }

  navigateTo() {
    return browser.get('/registro');
  }

  waitForError() {
    browser.wait(
      ExpectedConditions.presenceOf(element(by.css('.error'))),
      3000
    );
  }

  //aqui vamos a poner toda la lógica para encontrar los elementos
  rootElement(){
    return element(by.css('app-registro'));
  }

  getHeadingText(){
    return element(by.id('title'));
  }

  getLoginButton(){
    return element(by.id('loginnbutton'))

  }

  getLoginPage(){
    return element(by.css('app-login'));
  }

  enterNombre(nombre:string){
    const el = element(by.id('registro-nombre'));
    el.sendKeys(nombre);
  }

  enterApellido(apellido:string){
    const el = element(by.id('registro-apellido'));
    el.sendKeys(apellido);
  }
  enterDpi(dpi:string){
    const el = element(by.id('registro-dpi'));
    el.sendKeys(dpi);
  }
  enterEmail(correo:string){
    const el = element(by.id('registro-email'));
    el.sendKeys(correo);
  }
  enterEdad(edad:string){
    const el = element(by.id('registro-edad'));
    el.sendKeys(edad);
  }
  enterUsuario(usuario:string){
    const el = element(by.id('registro-usuario'));
    el.sendKeys(usuario);
  }
  enterPassword(password:string){
    const el = element(by.id('registro-pass'));
    el.sendKeys(password);
  }

  clickSignUp(){
    const el = element(by.id('signup-button'));
    browser.wait(ExpectedConditions.elementToBeClickable(el));
    el.click();
    browser.sleep(1000);
  }

  getErrorMessage(){
    return element(by.id('error_message')).getText();
  }
}