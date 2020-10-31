import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { TransaccionesserviceService } from './transaccionesservice.service'
import { MatTableDataSource } from '@angular/material/table';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModaltarjetaComponent } from '../modaltarjeta/modaltarjeta.component';
export interface DialogData {
  precio: string;
  nombre: string;
  imagen: string;
  idtarjeta: string;
}
//moudlos necesarios

//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ViewChild, ElementRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
const ELEMENT_DATA: Transferencia[] = [];
@Component({
  selector: 'app-detalle-transacciones',
  templateUrl: './detalle-transacciones.component.html',
  styleUrls: ['./detalle-transacciones.component.css']
})



export class DetalleTransaccionesComponent implements OnInit {
  @ViewChild("template") modal: ElementRef;
  animal: string;
  name: string;

  // clientesService: TransaccionesserviceService;
  perro = "hola"
  modalRef: BsModalRef;
  constructor(private servicio?: TransaccionesserviceService, private modalservice?: BsModalService, private modalService?: NgbModal, public dialog?: MatDialog) {
    //   this.clientesService = servicio;
    //  this.modalRef=modalservice;
  }
  closeResult = '';
  public transacciones = [];
  public array2 = [];
  public arraygift = [];
  public idtarjeta = ""
  public imagen = ""
  public nombre = ""
  public precio = ""
  data = Object.assign(ELEMENT_DATA)
  dataSource = new MatTableDataSource<Element>(this.data);
  displayedColumns = [
    'select',
    'id',
    'Estado',
    'Fecha',
    'Giftcards',
    'Tarjeta',
    'Total',
    'Nombre'
  ];
  ngOnInit(): void {

    //este metodo imprime las transacciones, falta meterlo a un arreglo y crear objetos
    // this.transacciones = this.clientesService.gettransaccionesdetalladas();
    console.log(this.transacciones.length)
    this.Trasaccionescasteadas()
    this.giftcardscasteadas()
    //this.abrirModal(this.modal);
  }

  abrirModal(modal) {
    console.log("LLAME A ABRIR")
    this.modalService.open(modal);
  }

  openDialog(role): void {
    for (let i = 0; i < this.arraygift.length; i++) {

      if (role == this.arraygift[i].codigo) {
        this.imagen = this.arraygift[i].image;
        this.precio = this.arraygift[i].valor;
        this.nombre = this.arraygift[i].name;
        this.idtarjeta = role;
      }
      // console.log("ENTRE AL FOR " + i)
      // console.log(catsSnapshot[i].payload.doc)



    }
    const dialogRef = this.dialog.open(ModaltarjetaComponent, {
      width: '250px',
      data: { precio: this.precio, nombre: this.nombre, imagen: this.imagen, idtareta: this.idtarjeta }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  //metodo para abrir el modal
  async openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalservice.show(template);
    //  this.sleep(5000);

  }


  cerrarmodal() {
    this.modalservice.hide();
  }
  public getTransaccionestodos() {
    let transacciones = [];
    return transacciones;
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

  public Trasaccionescasteadas() {

    this.servicio.getTransaccionesbd().subscribe(async (catsSnapshot) => {



      console.log(catsSnapshot)
      for (let i = 0; i < catsSnapshot.length; i++) {
        console.log("ENTRE AL FOR " + i)
        console.log(catsSnapshot[i].payload.doc)


        this.array2.push(catsSnapshot[i].payload.doc.data())
        this.array2[i].uid = i + 1;

      }
      console.log("EL NOMBRE DE LA PRIMER TRANSACCION FUE " + this.array2[0].uid)
      this.data = this.array2
      this.dataSource = new MatTableDataSource<Element>(this.data);
      console.log("LA DATA ES " + this.data[0].Giftcards[0])
      /*   console.log("ENTRE A CASTEO y el array 2 es " + this.array2[0])
         this.transacciones = [];
         catsSnapshot.forEach((TransData: any) => {
            console.log("ENTRE A FOR")
            console.log("ESTADO DE ESTA ES "+ TransData.payload.doc.id)
           this.transacciones.push({
             id: TransData.payload.doc.id,
             estado: TransData.payload.doc.Estado,
             fecha: TransData.payload.doc.Fecha,
             Gifcards: TransData.payload.doc.Gifcards,
             tarjeta: TransData.payload.doc.Tarjeta,
             total: TransData.payload.doc.Total
   
           });
         })*/
    });
    return this.transacciones;
  }


  //obtener giftcards
  public giftcardscasteadas() {

    this.servicio.getgiftcards().subscribe(async (catsSnapshot) => {



      console.log(catsSnapshot)
      for (let i = 0; i < catsSnapshot.length; i++) {
        console.log("ENTRE AL FOR " + i)
        console.log(catsSnapshot[i].payload.doc)


        this.arraygift.push(catsSnapshot[i].payload.doc.data())
        console.log("LA IMAGEN DEL LA GIFT ES " + this.arraygift[i].image)

      }

    });
    return this.transacciones;
  }

  public abrirmodal(role, template: TemplateRef<any>) {
    //  alert(role)
    for (let i = 0; i < this.arraygift.length; i++) {

      if (role == this.arraygift[i].codigo) {
        this.imagen = this.arraygift[i].image;
        this.precio = this.arraygift[i].valor;
        this.nombre = this.arraygift[i].name;
        this.idtarjeta = role;
      }
      // console.log("ENTRE AL FOR " + i)
      // console.log(catsSnapshot[i].payload.doc)



    }

    this.modalRef = this.modalservice.show(template);

  }



}

export class Transferencia {
  constructor(public uid: string, public Estado: string, public Fecha: Date, public Gitfcards: [], public Tarjeta: string, public Total: number, public Nombre: string) {

  }
}

//clase para el dialogo
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'plantilla.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}