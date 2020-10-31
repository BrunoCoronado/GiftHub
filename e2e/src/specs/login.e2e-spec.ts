import { LoginPage } from '../page-objects/login.po';
import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

describe('Historia - Inicio de sesión', () => {
  let login: LoginPage;
  const expectedTitle='Iniciar Sesión';

  beforeEach(() => {  
    login = new LoginPage();
  });

  describe('Feature: Como usuario quiero acceder a la aplicación', () => {
    const definicion_escenario1=`
      Scenario: Abro la aplicación
        Given: El usuario ingresa a la url de la aplicación
        When: Se carga la aplicación
        Then: Se debe mostrar la vista de inicio de sesión, el botón de navegación y el párrafo de error debe mostrarse sin errores de error.
    `
    it(definicion_escenario1, () => {
      login.navigateTo();
      expect(login.rootElement().isDisplayed()).toEqual(true);
      login.navigateTo();
      expect(expectedTitle).toEqual(expectedTitle);
      login.navigateTo();
      expect(login.getRegistrationButton().getText()).toEqual('Registrarse');
      login.navigateTo();
      expect(login.getErrorMessage()).toEqual('');
    });
    const definicion_escenario2=`
      Scenario: Navegar hacia la vista de registro
        Given: El usuario se encuentra en la vista login
        When: Presiona el botón 'Registrarse'
        Then: Se debe mostrar la vista de Registro
    `
    it(definicion_escenario2, () => {
      login.getRegistrationButton().click();
      let page=login.getRegistrationPage();
      expect(page.isDisplayed()).toBeTruthy();
    });
    
    const definicion_escenario3=`
      Scenario: Credenciales invalidas
        Given: El usuario agrega credenciales inválidas a los campos
        When: Presiona el botón 'Iniciar Sesión'
        Then: Se debe mostrar el mensaje 'CORREO O CONTRASEÑA INVÁLIDOS'
    `
    it(definicion_escenario3, () => {
      login.navigateTo();
      login.enterEmail('chepe@chepe.com')
      login.enterPassword('chepiito123');
      login.clickSignIn();
      expect(login.getErrorMessage()).toEqual('CORREO O CONTRASEÑA INVÁLIDOS');
    });
    
    const definicion_escenario4=`
      Scenario: Inicio de sesión exitoso para un usuario cliente
        Given: El usuario agrega credenciales válidas a los campos
        When: Presiona el botón 'Iniciar Sesión'
        Then: Se debe mostrar navegar a vista de tienda
    `
    it(definicion_escenario4, () => {
      login.navigateTo();
      login.enterEmail('baco420151@gmail.com');
      login.enterPassword('123456');
      login.clickSignIn();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('/tienda'), 5000).then(function(result){
        expect(result).toEqual(true, 'bienvenido baco420151@gmail.com');
      });
    });

    const definicion_escenario5=`
      Scenario: Inicio de sesión exitoso para un usuario ADMINISTRADOR
        Given: El usuario agrega credenciales válidas a los campos
        When: Presiona el botón 'Iniciar Sesión'
        Then: Se debe mostrar navegar a vista general de TRANSACCIONES
    `
    it(definicion_escenario5, () => {
      login.navigateTo();
      login.enterEmail('prueba2@gmail.com');
      login.enterPassword('Prueba123$');
      login.clickSignIn();
      const EC = protractor.ExpectedConditions;
      browser.wait(EC.urlContains('/transacciones'), 5000).then(function(result){
        expect(result).toEqual(true, 'bienvenido baco420151@gmail.com');
      });
    });

  })
  
});