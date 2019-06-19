import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { Login } from '../Domain/login.model';
import { EquipoService } from '../Service/equipo.service';
import { LoginService } from '../Service/login.service';



@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {

  identificadorEquipo: number;
  nombreEquipo: string;
  nombreRepresentante: string;
  categoria: string;
  rama: string;
  logo: string;
  telefonoRepresentante: string;
  canchaSede: string;
  contraseniaEquipo: string;
  equipos: Equipo[] = new Array<Equipo>();
  representante: Equipo[] = new Array<Equipo>();
  equipo: Equipo;
  equipo1: Equipo;
  cont: number = 0;
  login: Login;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private equipoS: EquipoService, private loginS: LoginService) {
    this.http.get<Equipo[]>(baseUrl + 'api/Equipo').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
  }

  insertar() {
    if (this.nombreEquipo != null && this.nombreRepresentante != null && this.canchaSede != null && this.telefonoRepresentante != null && this.contraseniaEquipo != null && this.rama != null && this.categoria != null) {
      if (this.verificar() == 0) {
        alert("El equipo " + this.nombreEquipo + " ya está registrado ");
      }
      if (this.verificarRep() == 0) {
        alert("El representante " + this.nombreRepresentante + " ya está registrado con otro equipo ");
      }
      else {
        this.equipo = new Equipo(1, this.nombreEquipo, this.nombreRepresentante, this.categoria, this.rama, 1, this.canchaSede, this.telefonoRepresentante, this.contraseniaEquipo);
        this.login = new Login(this.nombreEquipo, this.contraseniaEquipo, 1);
        this.equipoS.insertarEquipo(this.equipo).subscribe(data => this.equipo = data);
        this.loginS.registrar(this.login).subscribe(data => this.login = data);
        alert('Se inserto correctamente el equipo ' + this.nombreEquipo);
        window.location.href = 'gestionar-equipo-rep/' + this.nombreEquipo;
      }
    }
    else {
      alert("Debe rellenar todos los espacios del formulario");
    }

  }



  verificar() {
    var cont = 0;
    var valido = 0;
    while (cont < this.equipos.length) {
      if (this.nombreEquipo == this.equipos[cont].nombreEquipo) {
        valido = 0;
        cont = this.equipos.length;
      }
      else {
        valido = 1;
      }
      cont++;
    }
    return valido;
  }


  verificarRep() {
    var cont = 0;
    var valido = 0;
    while (cont < this.equipos.length) {
      if (this.nombreRepresentante == this.equipos[cont].nombreRepresentante) {
        valido = 0;
        cont = this.equipos.length;
      }
      else {
        valido = 1;
      }
      cont++;
    }
    return valido;
  }


  ngOnInit() {
    this.http.get<Equipo[]>(this.baseUrl + 'api/Equipo').subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));

  }

}
