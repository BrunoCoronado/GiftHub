export interface User {
    id: string;
    usuario: string;
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    dpi: string;
    edad: string;
    rol: string;
}

export interface Transaccion {
    id:string;
    estado: string;
    fecha: string;
    Gifcards: [];
    tarjeta: string;
    total: number;
}