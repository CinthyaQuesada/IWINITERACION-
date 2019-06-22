import { Login } from '../Domain/login.model';
import { Component, OnInit, Inject } from '@angular/core';
import { LoginService } from '../Service/login.service';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuarios: Login[] = new Array<Login>();
  login: Login = new Login();
  nombreUsuario: string;
  contrasenia: string;
  tipoUsuario: number;
  direccionamiento: string;
  equipo: Equipo = new Equipo();
  equipos: Equipo[] = new Array<Equipo>();
  idEquipo: number;

  constructor(private loginS: LoginService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.http.get<Login[]>(baseUrl + 'api/Login').subscribe(result => {
      this.usuarios = result;
    }, error => console.error(error));
    
    this.http.get<Equipo[]>(this.baseUrl + 'api/Equipo/').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));


  }

  ingresar() {

    if (this.contrasenia != null && this.nombreUsuario != null) {
      if (this.verificar() == -1) {
        alert("Usuario o contraseña inválido, intente de nuevo");
      }

      else if (this.verificar() == 0) {
        alert("Bienvenido " + this.nombreUsuario);
        window.location.href ="moduloAdministrador";
      }
      else if (this.verificar() == 1) {
        this.idE();
        alert("Bienvenido " + this.nombreUsuario);
        console.log(this.idEquipo);
        window.location.href = "moduloEncargado/" + this.idEquipo;
      }
    }
    else {
      alert("Proporcione su usuario y contraseña para acceder");
    }

  }


  verificar() {
    
    var cont = 0;
    var valido = -1;

    while (cont < this.usuarios.length) {
      if (this.nombreUsuario == this.usuarios[cont].nombreUsuario && this.contrasenia == this.usuarios[cont].contrasenia) {
        valido = this.usuarios[cont].tipoUsuario;
        cont = this.usuarios.length;
      }
      else {
        valido = -1;
      }
      cont++;
    }
    return valido;
  }


  ngOnInit() {
    
  }


   idE() {
    var cont = 0;
    while (cont < this.equipos.length) {
      if (this.nombreUsuario == this.equipos[cont].nombreEquipo) {
        this.idEquipo = this.equipos[cont].identificador;
        cont = this.equipos.length;
      }
      else {
        
      }
      cont++;
    }
  }

}
