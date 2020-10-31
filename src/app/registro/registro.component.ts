import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../web.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre: string;
  apellidos: string;
  dpi: string;
  correo: string;
  edad: string;
  usuario: string;
  pass: string;

  constructor(private router: Router, private webService: WebService) {}

  ngOnInit(): void {
    
  }

  async registrarse(){
    /*
    console.log(this.nombre)
    console.log(this.apellidos)
    console.log(this.dpi)
    console.log(this.correo)
    console.log(this.edad)
    console.log(this.usuario)
    console.log(this.pass)
    */

    const data = {
      nombres: this.nombre,
      apellidos: this.apellidos,
      dpi: this.dpi,
      correo: this.correo,
      edad: this.edad,
      usuario: this.usuario,
      password: this.pass,
      rol: 'cliente'
    }

    const user = await this.webService.register(this.correo, this.pass, data);

    if(user){
      alert('usuario creado')
      this.router.navigate([ '/login' ]); 
    } else {
      alert('error')
    }
  }

  irInicioSesion(){
    this.router.navigate([ '/login' ]); 
  }

}
