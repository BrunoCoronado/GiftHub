import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';

describe('Componente: App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe mostrar la página de inicio de sesión', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Iniciar Sesión');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
