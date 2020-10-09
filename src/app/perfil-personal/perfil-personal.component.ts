import { Component, OnInit, TemplateRef } from "@angular/core";
import { WebService } from "../web.service";
import { User } from "../perfil-personal/user";
import { PersonalService } from "../personal.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-perfil-personal",
  templateUrl: "./perfil-personal.component.html",
  styleUrls: ["./perfil-personal.component.css"],
})
export class PerfilPersonalComponent implements OnInit {
  modalRef: BsModalRef;
  usuarios: User[] = [];

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
    private userService: PersonalService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.SimularLogin();
    this.obtenerDatos();
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

  openModal(template: TemplateRef<any>) {
    try {
      this.modalRef = this.modalService.show(template);
    } catch (e) {
      console.log(e);
    }
  }

  closeModal(template: TemplateRef<any>) {
    this.modalRef.hide();
  }

  checkEmail(email: string): boolean {
    return email.includes("@", 1);
  }

  checkName(name: string): boolean {
    return name.length > 1;
  }

  checkPassword(password) {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (password.match(paswd)) {
      return true;
    }
    return false;
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
  }

  modificarUser(nombres, apellidos, dpi, edad, correo, user, password) {
    if (
      this.noVacio(nombres.value) &&
      this.noVacio(apellidos.value) &&
      this.noVacio(dpi.value) &&
      this.noVacio(edad.value) &&
      this.noVacio(correo.value) &&
      this.noVacio(user.value) &&
      this.noVacio(password.value)
    ) {
      if (this.checkUser(user.value)) {
      } else {
        this.toastr.error(
          "Validación Usuario",
          "El nombre de usuario ya existe"
        );
      }
    } else {
      this.toastr.error(
        "Validación Usuario",
        "Todos los campos deben estar llenos"
      );
    }
  }

  noVacio(dato) {
    if (dato != undefined && dato != null && dato != "") {
      return true;
    }
    return false;
  }

  checkUser(user) {
    if (this.user.usuario == user) return true;
    let ret = this.userService.getUserData();

    ret.forEach((a) => {
      a.forEach((item) => {
        var obj = item.payload.doc.data();
        this.usuarios.push({
          id: obj.id,
          usuario: obj.usuario,
          nombres: obj.nombres,
          apellidos: obj.apellidos,
          correo: obj.correo,
          password: obj.password,
          dpi: obj.dpi,
          edad: obj.edad,
          rol: obj.rol,
        });
      });

      for (let i = 0; i < this.usuarios.length; i++) {
        console.log("Comparando");
        console.log(this.usuarios[i].usuario);
        console.log(user);
        console.log("");
        console.log("");

        if (this.usuarios[i].usuario == user && user != this.user.usuario) {
          console.log("se encontro igual");
          return false;
        }
      }

      return true;
    });
  }
}
