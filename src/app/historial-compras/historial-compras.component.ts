import { Component, OnInit } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.component.html',
  styleUrls: ['./historial-compras.component.css']
})
export class HistorialComprasComponent implements OnInit {

  constructor(private webService: WebService) { }

 ngOnInit(): void {
    this.cargar();
  }

  async cargar(){
    let res= await this.webService.getUserTransactions('id').get().toPromise();
    console.log(res);
  }

}
