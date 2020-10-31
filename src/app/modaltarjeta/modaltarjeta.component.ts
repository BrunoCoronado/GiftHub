import { Component, OnInit ,Inject} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { NgbModal ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//moudlos necesarios
import {AlertModule} from 'ngx-bootstrap/alert';
import {ModalModule} from 'ngx-bootstrap/modal';
export interface DialogData {
  precio: string;
  nombre: string;
  imagen:string;
  idtarjeta:string;
}
@Component({
  selector: 'app-modaltarjeta',
  templateUrl: './modaltarjeta.component.html',
  styleUrls: ['./modaltarjeta.component.css']
})
export class ModaltarjetaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModaltarjetaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

}
