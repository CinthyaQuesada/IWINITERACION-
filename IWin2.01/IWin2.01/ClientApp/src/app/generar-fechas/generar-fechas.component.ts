import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Campeonato } from '../Domain/Campeonato.model';
import { campeonatoService } from '../Service/campeonatoService';
import { Equipo } from '../Domain/Equipo.model';
import { Grupo } from '../Domain/Grupo.model';
import { Juego } from '../Domain/juego.model';
import { juegoService } from '../Service/juegoService';
import { Arbitro } from '../Domain/Arbitro';
import { Fecha } from '../Domain/fecha.model';

@Component({
  selector: 'app-generar-fechas',
  templateUrl: './generar-fechas.component.html',
  styleUrls: ['./generar-fechas.component.css']
})
export class GenerarFechasComponent {

  public campeonatos: Campeonato[] = [];
  public campeonato: Campeonato;
  public equipos: Equipo[] = [];
  public equipo: Equipo;
  public cantidadGrupos: number;
  grupo1: number;
  grupo2: number;
  grupo3: number;
  grupo4: number;
  grupo1Equipos: Grupo[] = [];
  grupo: Grupo;
  public juegos: Juego[] = [];
  public juego: Juego;
  public juegosI: Juego[] = [];
  identificador: number;
  identificadorCampeonato: String;
  equipoA: Equipo;
  equipoB: Equipo;
  fechaJuego: Date;
  estadoJuego: String;
  lugar: String;
  arbitroAsignado: Arbitro = new Arbitro();
  fechaInicio: Date;
  private fechasF: Fecha[] = new Array<Fecha>();
  public arbitros: Arbitro[] = new Array<Arbitro>();;
  campeonatoSelect: Campeonato;

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public campeonatoService: campeonatoService, public juegoService: juegoService) {
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));

  }

  buscar(campeonato: Campeonato): void {
    this.campeonatoSelect = campeonato;
    this.identificadorCampeonato = campeonato.identificador + "";
    this.fechaInicio = campeonato.fechaInicio;

    
    this.http.get<Equipo[]>(this.baseUrl + 'api/equipo/equipos/' + campeonato.identificador).subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
  }


  buscarFechas(cantidad: number, llenarJuego: any): void {
    this.http.get<Fecha[]>(this.baseUrl + 'api/Juego/' + cantidad + '/' + this.fechaInicio).subscribe(result => {
      llenarJuego && llenarJuego(result);
    }, error => console.error(error));
  }

  buscarFechasPromise(cantidad: number) {
    let promise = new Promise((resolve, reject) => {
      this.http.get<Fecha[]>(this.baseUrl + 'api/Juego/' + cantidad + '/' + this.fechaInicio)
        .toPromise()
        .then(
          res => resolve(res),
          msg => reject(msg)
        );
    });
    return promise;
  }

  buscarArbitrosPromise() {
    let promise = new Promise((resolve, reject) => {
      this.http.get<Arbitro[]>(this.baseUrl + 'api/Arbitro/')
        .toPromise()
        .then(
          res => resolve(res),
          msg => reject(msg)
        );
    });
    return promise;
  }

  generar(): void {

   
    if (this.campeonato.cantidadGrupos == 0 && this.equipos.length > 0) {
      console.log("entra en generar e if");
      var element = <HTMLInputElement>document.getElementById("btnExcel");
      element.disabled = false;

      this.grupo1Equipos = [];

      if (this.equipos.length > 0) {
        var rept = 0;
        var end = 0;
        var arraynum = [];
        while (rept != -1) {
          for (var i = 1; i < this.equipos.length; i++) {
            var numaleatorio = Math.floor(Math.random() * ((this.equipos.length - 1) + 1));
            if (arraynum.indexOf(numaleatorio) < 0) {
              arraynum.push(numaleatorio);
              end++;
            }
            end == this.equipos.length ? rept = -1 : false;
          }
        }
      }


      if (this.equipos.length <= 1) {
        alert("Solamente existe un equipo regristrado para el campeonato");
      }
      else if (this.equipos.length < 6) {
        this.grupo1 = this.equipos.length;
      }
      else if (this.equipos.length = 6) {
        this.grupo1 = 3;
        this.grupo2 = 3;
      } else if (this.equipos.length = 7) {
        this.grupo1 = 3;
        this.grupo2 = 4;
      } else if (this.equipos.length = 8) {
        this.grupo1 = 4;
        this.grupo2 = 4;
      } else if (this.equipos.length = 9) {
        this.grupo1 = 3;
        this.grupo2 = 3;
        this.grupo3 = 3;
      } else if (this.equipos.length = 10) {
        this.grupo1 = 5;
        this.grupo2 = 5;
      } else if (this.equipos.length = 11) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 3;
      } else if (this.equipos.length = 12) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
      } else if (this.equipos.length = 13) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
      } else if (this.equipos.length = 14) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
      } else if (this.equipos.length = 15) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
      } else if (this.equipos.length = 16) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 4;
      } else if (this.equipos.length = 17) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 5;
      } else if (this.equipos.length = 18) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
        this.grupo4 = 5;
      } else if (this.equipos.length = 19) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
      } else if (this.equipos.length = 20) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
      }




      //cantidad de grupos
      console.log(this.equipos.length)
      if (this.equipos.length < 6) {
        this.cantidadGrupos = 1;
        for (var a = 0; a < this.grupo1; a++) {
          this.grupo = new Grupo("Grupo1", this.equipos[arraynum[a]]);
          this.grupo1Equipos.push(this.grupo);
        }
      } else if ((this.equipos.length >= 6 && this.equipos.length <= 8) || this.equipos.length == 10) {
        console.log("entra en if 6");
        this.cantidadGrupos = 2;
        for (var b = 0; b < this.equipos.length; b++) {
          if (b < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[b]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (b >= this.grupo1 && b < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[b]]);
            this.grupo1Equipos.push(this.grupo);
          }
        }
      } else if (this.equipos.length == 9 || (this.equipos.length >= 11 && this.equipos.length <= 15)) {
        this.cantidadGrupos = 3;
        for (var c = 0; c < this.equipos.length; c++) {
          if (c < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[c]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (c >= this.grupo1 && c < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[c]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (c >= (this.grupo1 + this.grupo2) && c < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[c]]);
            this.grupo1Equipos.push(this.grupo);
          }
        }
      } else if (this.equipos.length >= 16 && this.equipos.length <= 20) {
        this.cantidadGrupos = 4;
        for (var h = 0; h < this.equipos.length; h++) {
          if (h < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= this.grupo1 && h < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2) && h < (this.grupo1 + this.grupo2 + this.grupo3)) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2 + this.grupo3) && h < this.equipos.length) {
            this.grupo = new Grupo("Grupo4", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          }
        }
      }




    } else if (this.campeonato.cantidadGrupos == 1) {
     
        alert("Existen juegos pendientes aun");
      document.getElementById('id01').style.display = 'none';
    } else if (this.campeonato.cantidadGrupos == 2) {
      alert("Campeonato finalizado");
    }







  }

  getJuegos(cameponato: Campeonato): boolean {
    var estado = false;
    console.log("entra en buscar");
    this.http.get<Juego[]>(this.baseUrl + 'api/Juego/' + this.campeonato.identificador).subscribe(result => {
      this.juegos = result;
    }, error => console.error(error));

    for (var h = 0; h < this.juegos.length; h++) {
      if (this.juegos[h].estadoJuego == "resgistrado") {
        estado = true;
      } else
        estado = false
    }
    return estado;
  }

  juegoInsert(equiposI: Equipo, fecha: string): void {
    this.juegoService.agregarJuego(new Juego(this.identificador, this.identificadorCampeonato, this.equipoA, this.equipoB, this.fechaJuego, this.estadoJuego, this.lugar, this.arbitroAsignado)).subscribe(data => this.juego = data);

  }

  fechasCr(): void {

    if (this.campeonato.cantidadGrupos == 1) {
      document.getElementById('id02').style.display = 'none';
    } else {

      if (this.equipos.length <= 1) {
        alert("Solamente existe un equipo regristrado para el campeonato");
      }
      else if (this.equipos.length < 6) {
        this.grupo1 = this.equipos.length;
        if (this.equipos.length = 2) {
          const llenarJuego = (fechas: any, arbitros: any) => {
            const cantidadArbitros: number = arbitros.length;
            console.log(this.randomArbitro(cantidadArbitros));
            console.log(arbitros);

            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          }

          Promise.all([this.buscarFechasPromise(this.grupo1), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
        } else if (this.equipos.length = 3) {
          const llenarJuego = (fechas: any, arbitros: any) => {
            const cantidadArbitros: number = arbitros.length;
            console.log(this.randomArbitro(cantidadArbitros));
            console.log(arbitros);

            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[2].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          }

          Promise.all([this.buscarFechasPromise(3), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
        }
        else if (this.equipos.length = 4) {
          const llenarJuego = (fechas: any, arbitros: any) => {
            const cantidadArbitros: number = arbitros.length;
            console.log(this.randomArbitro(cantidadArbitros));
            console.log(arbitros);

            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[3].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[3].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[3].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[2].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          }

          Promise.all([this.buscarFechasPromise(3), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
        }
        else if (this.equipos.length = 5) {
          const llenarJuego = (fechas: any, arbitros: any) => {
            const cantidadArbitros: number = arbitros.length;
            console.log(this.randomArbitro(cantidadArbitros));
            console.log(arbitros);

            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[2].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[3].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[4].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[4].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[4].equipo, fechas[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[3].equipo, fechas[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[4].equipo, fechas[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
            this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[3].equipo, fechas[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          }

          Promise.all([this.buscarFechasPromise(5), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
        }
      }
      else if (this.equipos.length = 6) {
        this.grupo1 = 3;
        this.grupo2 = 3;


        const llenarJuego = (fechas: any, arbitros: any) => {
          const cantidadArbitros: number = arbitros.length;
          console.log(this.identificadorCampeonato);


          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[4].equipo, fechas[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[5].equipo, fechas[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[1].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[4].equipo, fechas[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));


          for (var h = 0; h < this.juegosI.length; h++) {
            this.juegosI[h].identificadorCampeonato = this.identificadorCampeonato;
            this.juegoService.agregarJuegos(this.juegosI[h]).subscribe(data => this.juego = data);
          }
          this.campeonatoService.modificar2(new Campeonato(this.campeonatoSelect.identificador, this.campeonatoSelect.nombreCampeonato, this.campeonatoSelect.tipo, this.campeonatoSelect.categoria, 1, this.campeonatoSelect.fechaInicio)).subscribe(data => this.campeonato = data);

        }
        this.campeonatoSelect.cantidadGrupos = 1;

        Promise.all([this.buscarFechasPromise(this.grupo1), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));


      } else if (this.equipos.length = 7) {
        this.grupo1 = 3;
        this.grupo2 = 4

        const llenarJuego = (fechas: any, arbitros: any) => {
          const cantidadArbitros: number = arbitros.length;
          console.log(this.randomArbitro(cantidadArbitros));
          console.log(arbitros);

          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[4].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[5].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[1].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[4].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[6].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[4].equipo, this.grupo1Equipos[6].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[6].equipo, this.fechasF[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
        }
        Promise.all([this.buscarFechasPromise(this.grupo1), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));

      } else if (this.equipos.length = 8) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        const llenarJuego = (fechas: any, arbitros: any) => {
          const cantidadArbitros: number = arbitros.length;
          console.log(this.randomArbitro(cantidadArbitros));
          console.log(arbitros);

          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[4].equipo, this.grupo1Equipos[5].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[4].equipo, this.grupo1Equipos[6].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[3].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[4].equipo, this.grupo1Equipos[7].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[2].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[6].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[3].equipo, this.fechasF[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[7].equipo, this.fechasF[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[3].equipo, this.fechasF[5].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[6].equipo, this.grupo1Equipos[7].equipo, this.fechasF[5].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
        }
        Promise.all([this.buscarFechasPromise(6), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
      } else if (this.equipos.length = 9) {
        this.grupo1 = 3;
        this.grupo2 = 3;
        this.grupo3 = 3;
        const llenarJuego = (fechas: any, arbitros: any) => {
          const cantidadArbitros: number = arbitros.length;

          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[4].equipo, this.fechasF[0].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[6].equipo, this.grupo1Equipos[7].equipo, this.fechasF[1].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[5].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[6].equipo, this.grupo1Equipos[8].equipo, this.fechasF[2].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[1].equipo, this.grupo1Equipos[2].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[4].equipo, this.grupo1Equipos[5].equipo, this.fechasF[3].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
          this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[7].equipo, this.grupo1Equipos[8].equipo, this.fechasF[4].fechaT, "Pendiente", "Cot", arbitros[this.randomArbitro(cantidadArbitros)]));
        }
        Promise.all([this.buscarFechasPromise(5), this.buscarArbitrosPromise()]).then((results) => llenarJuego(results[0], results[1]));
      } else if (this.equipos.length = 10) {
        this.grupo1 = 5;
        this.grupo2 = 5;
      } else if (this.equipos.length = 11) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 3;
      } else if (this.equipos.length = 12) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
      } else if (this.equipos.length = 13) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
      } else if (this.equipos.length = 14) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
      } else if (this.equipos.length = 15) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
      } else if (this.equipos.length = 16) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 4;
      } else if (this.equipos.length = 17) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 5;
      } else if (this.equipos.length = 18) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
        this.grupo4 = 5;
      } else if (this.equipos.length = 19) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
      } else if (this.equipos.length = 20) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
      }

      this.agregarJuego();


      var element = <HTMLInputElement>document.getElementById("btnExcel");
      element.disabled = true;
    }
  }
  public arbitroAsignados: Arbitro[] = [];

  buscarArbitros(): void {


    this.http.get<Arbitro[]>(this.baseUrl + 'api/Arbitro/').subscribe(result => {
      this.arbitroAsignados = result;
    }, error => console.error(error));

  }

  randomArbitro(length): number {
    if (length > 0) {
      var numaleatorio = Math.floor(Math.random() * (length));
    }
    return numaleatorio;
  }

  agregarJuego() {
    console.log("entra en agregar");
    console.log("lenght " + this.juegosI.forEach.length);
    console.log(this.juegosI)
    //if (this.juegosI.length != 0) {

      for (var h = 0; h < this.juegosI.length; h++) {
        //  this.juegoService.agregarJuegos(this.juegosI[h]).subscribe(data => this.juego = data);
        console.log(this.juegos[h].identificadorCampeonato);
      }
      //alert("Juegos han sido agregados exitosamente")
      //window.location.href = "generarFechas"
   /* }
    else {
      alert("Hay espacios en blanco,por favor complete la información");



    }*/
  }

  getLista() {

    return this.juegosI;
  }
}



