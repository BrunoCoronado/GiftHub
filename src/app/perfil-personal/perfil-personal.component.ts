import { Component, OnInit } from '@angular/core';
import {WebService} from '../web.service'
@Component({
  selector: 'app-perfil-personal',
  templateUrl: './perfil-personal.component.html',
  styleUrls: ['./perfil-personal.component.css']
})
export class PerfilPersonalComponent implements OnInit {

  constructor(private service:WebService) { }

  ngOnInit(): void {
  }

  

}
