import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validarCampos(campo1, campo2){
    if(!campo1) return false;
    if(!campo2) return false;
    return true;
  }

}
