import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { RegistroPage } from '../page-objects/registro.po';

describe('Historia - Registro', () => {
    let registro: RegistroPage;

    beforeEach(() => {
        registro = new RegistroPage();
    });

    describe('Feature: Como un estudiante quiero crear un usuario para acceder a la aplicación', () => {
        const definicion_escenario1 = `
        Scenario: No ingresar datos al formulario
            Given Dado que el usuario no ingresa sus credenciales en el formulario.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar el mensaje de error.
        `
        it(definicion_escenario1, () => {
            registro.navigateTo();
            registro.enterNombre('');
            registro.enterApellido('');
            registro.enterDpi('');
            registro.enterEmail('');
            registro.enterEdad('');
            registro.enterUsuario('');
            registro.enterPassword('');
            registro.clickSignUp();
            expect(registro.getErrorMessage()).toEqual('DATOS INVÁLIDOS');
            
        });
        
        const definicion_escenario2 = `
        Scenario: Regresar a la pantalla de login
            Given Dado que el usuario prefiere no crear un usuario y regresar a la pantalla de 'login'
            When Cuando hace clic en el botón 'Login'.
            Then Se debe cambiar de página.
        `

        it(definicion_escenario2, () => {
            registro.navigateTo();
            registro.getLoginButton().click();
            let page = registro.getLoginPage();
            expect(page.isDisplayed()).toBeTruthy();
        });
        
        const definicion_escenario3 = `
        Scenario: Ingresar unicamente el correo en el formulario
            Given Dado que el usuario ingresa solo su usuario.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar el mensaje de error.
        `

        it(definicion_escenario3, () => {
            registro.navigateTo();
            registro.enterNombre('');
            registro.enterApellido('');
            registro.enterDpi('');
            registro.enterEmail('');
            registro.enterEdad('');
            registro.enterUsuario('_ttest');
            registro.enterPassword('');
            registro.clickSignUp();
            expect(registro.getErrorMessage()).toEqual('DATOS INVÁLIDOS');
        });
        
        const definicion_escenario4 = `
        Scenario: Ingresar ambos datos al formulario
            Given Dado que el usuario ingresa sus datos en el formulario.
            When Cuando hace clic en el botón 'Registrarme'.
            Then Se debe mostrar la página de 'login'.
        `

        it(definicion_escenario4, () => {
            registro.navigateTo();
            var rightNow = new Date();
            var rightNow = new Date();
            var res = rightNow.toISOString().replace(/-/g,"").replace(/:/g,"").replace(/\./g,"");
            
            registro.enterNombre('nueva prueba');
            registro.enterApellido('e2e angular protractor');
            registro.enterDpi('3606169920101');
            registro.enterEmail(`${res}@gmail.com`);
            registro.enterEdad('21');
            registro.enterUsuario(`_test${res}`);
            registro.enterPassword('123456');
            registro.clickSignUp();
            const EC = protractor.ExpectedConditions;
            browser.wait(EC.urlContains('/login'), 5000).then(function (result) {
                expect(result).toEqual(true);
            });
        });
    
    });
});