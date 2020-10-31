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

  constructor(private router?: Router, private webService?: WebService) { }

  ngOnInit(): void {
  }

  async irInicioSesion(){
    /*console.log(this.usuario)
    console.log(this.pass)*/

    const user = await this.webService.login(this.usuario, this.pass);

    if(user){
      //alert('Bienvenido al sistema')
     // this.router.navigate([ '/tienda' ]); 
    } else {
      this.error_message='Correo o contraseña inválidos';    }
  }

  registrarse(){
    this.router.navigate([ '/registro' ]); 
  }

}
