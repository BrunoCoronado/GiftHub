import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { resolve } from 'dns';
import { WebService } from '../web.service';

import { LoginComponent } from './login.component';


describe('Component: Login', () => {
    let component: LoginComponent;

    beforeEach(() => {
        //router=new MockedRouter();
        component = new LoginComponent();

    });

    afterEach(() => {
        component = null;
    });


    it('Login Sucess', () => {
        let res = <Promise<boolean>>(new Promise((resolve, reject) => { resolve(true); }));
        spyOn(component, 'irInicioSesion').and.returnValue(res);
        expect(component.irInicioSesion()).toBe(res);
    });

    it('Login Fail', () => {
        let res = <Promise<boolean>>(new Promise((resolve, reject) => { resolve(false); }));
        spyOn(component, 'irInicioSesion').and.returnValue(res);
        expect(component.irInicioSesion()).toBe(res);
    });
});
