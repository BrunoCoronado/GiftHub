import { Component, OnInit, TemplateRef } from "@angular/core";
import { RegalarService } from "./regalar.service";
import { Giftcard } from "./giftcard";
import { User } from "../perfil-personal/user";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-regalar-giftcards",
  templateUrl: "./regalar-giftcards.component.html",
  styleUrls: ["./regalar-giftcards.component.css"],
})
export class RegalarGiftcardsComponent implements OnInit {
  cards1: Giftcard[] = [];
  cards2: Giftcard[] = [];
  modalRef: BsModalRef;

  card: Giftcard = {
    id: "",
    valor: "",
    name: "",
    codigo: "",
    image: "",
    uid: "",
  };

  user: User = {
    id: "",
    usuario: "",
    nombres: "",
    apellidos: "",
    correo: "",
    password: "",
    dpi: "",
    edad: "",
    rol: "",
  };

  constructor(
    private servicio: RegalarService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.SimularLogin();
    this.obtenerDatos();
    this.getCards();
  }

  SimularLogin() {
    var user1: User = {
      id: "cOBvdAQB0yF2HNvIdflQ",
      usuario: "KevinGarciaJ",
      nombres: "Kevin Alexander",
      apellidos: "Garcia Jachac",
      correo: "kevinalexandergarcia1999@gmail.com",
      password: "132465789",
      dpi: "3005523142525",
      edad: "21",
      rol: "Administrador",
    };

    localStorage.setItem("Usuario", JSON.stringify(user1));
    return true;
  }

  getCards() {
    let ret = this.servicio.getGiftCards();

    ret.forEach((a) => {
      a.forEach((item) => {
        var obj = item.payload.doc.data();
        console.log("entra");
        this.cards1.push({
          id: obj.id,
          valor: obj.valor,
          name: obj.name,
          codigo: obj.codigo,
          image: obj.image,
          uid: obj.uid,
        });
      });

      console.log(this.cards1.length);
      for (let i = 0; i < this.cards1.length; i++) {
        let obj = this.cards1[i];
        console.log(obj);
        console.log(this.user.usuario);

        if (obj.uid == this.user.usuario) {
          this.cards2.push(obj);
        }
      }
    });
  }

  obtenerDatos() {
    var retorno = JSON.parse(localStorage.getItem("Usuario"));
    this.user.id = retorno.id;
    this.user.usuario = retorno.usuario;
    this.user.nombres = retorno.nombres;
    this.user.apellidos = retorno.apellidos;
    this.user.correo = retorno.correo;
    this.user.password = retorno.password;
    this.user.dpi = retorno.dpi;
    this.user.edad = retorno.edad;
    this.user.rol = retorno.rol;

    console.log(retorno);
  }

  openModal(objeto, template: TemplateRef<any>) {
    try {
      this.modalRef = this.modalService.show(template);
    } catch (e) {
      console.log(e);
    }
  }

  closeModal(template: TemplateRef<any>) {
    this.modalRef.hide();
  }
}
