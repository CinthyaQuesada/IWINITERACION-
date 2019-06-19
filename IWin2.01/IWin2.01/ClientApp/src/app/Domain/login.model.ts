export class Login{
    nombreUsuario:String;
    contrasenia:String;
    tipoUsuario:number;

    constructor(nombreUsuario?:string,contrasenia?:string,tipoUsuario?:number){
        this.nombreUsuario=nombreUsuario;
        this.contrasenia=contrasenia;
        this.tipoUsuario=tipoUsuario;
    }
}
