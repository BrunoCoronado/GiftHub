import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-catalogo',
  templateUrl: './ver-catalogo.component.html',
  styleUrls: ['./ver-catalogo.component.css']
})
export class VerCatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getCatalogo() {
    let catalogo = [];
    return catalogo;
  }
}
