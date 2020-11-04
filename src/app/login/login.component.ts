import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string;
  pass: string;
  error_message='';

  constructor(private webService?: WebService, private router?: Router) { }

  ngOnInit(): void {
  }

  async irInicioSesion(){
    /*console.log(this.usuario)
    console.log(this.pass)*/

    const user = await this.webService.login(this.usuario, this.pass);

    if(user){
      //alert('Bienvenido al sistema')
     // this.router.navigate([ '/tienda' ]); 
     return true;
    } else {
      this.error_message='Correo o contraseña inválidos'; 
      return false;
    }
  }

  registrarse(){
    this.router.navigate([ '/registro' ]); 
  }

}
