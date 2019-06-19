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
  grupo2Equipos: Equipo[] = [];
  grupo3Equipos: Equipo[] = [];
  grupo4Equipos: Equipo[] = [];
  claves: String[] = [];
  grupo: Grupo;
  public juegos: Juego[] = [];
  public juego: Juego;
  public fechas: string[] = [];
  public juegosI: Juego[] = [];
  identificador: number;
  identificadorCampeonato: String;
  equipoA: Equipo;
  equipoB: Equipo;
  fechaJuego: Date;
  estadoJuego: String;
  lugar: String;
  arbitroAsignado: Arbitro = new Arbitro();

  constructor(public http: HttpClient, @Inject('BASE_URL') public baseUrl: string, public campeonatoService: campeonatoService, public juegoService: juegoService) {
    http.get<Campeonato[]>(baseUrl + 'api/Campeonato').subscribe(result => {
      this.campeonatos = result;
    }, error => console.error(error));

  }

  buscar(campeonato: Campeonato): void {
    this.identificadorCampeonato = campeonato.identificador+"";
    this.http.get<Equipo[]>(this.baseUrl + 'api/equipo/equipos/' + campeonato.identificador).subscribe(result => {
      this.equipos = result;
    }, error => console.error(error));
    console.log("entraaaaaqu")
  }

  generar(): void {

    if (this.campeonato.cantidadGrupos == 0) {

      var element = <HTMLInputElement>document.getElementById("btnExcel");
      element.disabled = false;

      this.grupo1Equipos = [];
      this.grupo2Equipos = [];

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
      console.log(arraynum);
      console.log(this.equipos)

      //cantidad de grpos
      console.log(this.equipos.length)
      if (this.equipos.length < 6) {
        this.cantidadGrupos = 1;
      } else if (this.equipos.length < 6 && this.equipos.length <= 8 && this.equipos.length >= 10 && this.equipos.length <= 11) {
        this.cantidadGrupos = 2;
      } else if (this.equipos.length == 9 && this.equipos.length >= 12 && this.equipos.length <= 15) {
        this.cantidadGrupos = 3;
      } else if (this.equipos.length >= 16 && this.equipos.length <= 20) {
        this.cantidadGrupos = 4;
      }




      if (this.equipos.length <= 1) {
        alert("Solamente existe un equipo regristrado para el campeonato");

      }
      else if (this.equipos.length < 6) {
        this.grupo1 = this.equipos.length;
        for (var a = 0; a < this.grupo1; a++) {
          this.grupo = new Grupo("Grupo1", this.equipos[arraynum[a]]);
          this.grupo1Equipos.push(this.grupo);
        }
      }
      else if (this.equipos.length = 6) {
        this.grupo1 = 3
        this.grupo2 = 3
        for (var b = 0; b < this.equipos.length; b++) {
          if (b < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[b]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (b >= this.grupo1 && b < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[b]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }
        console.log(this.grupo1Equipos);


      } else if (this.equipos.length = 7) {
        this.grupo1 = 3
        this.grupo2 = 4
        for (var c = 0; c < this.equipos.length; c++) {
          if (c < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[c]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (c >= this.grupo1 && c < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[c]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 8) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        for (var d = 0; d < this.equipos.length; d++) {
          if (d < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[d]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (d >= this.grupo1 && d < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[d]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 9) {
        this.grupo1 = 3;
        this.grupo2 = 3;
        this.grupo3 = 3;
        for (var e = 0; e < this.equipos.length; e++) {
          if (e < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[e]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (e >= this.grupo1 && e < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[e]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (e >= (this.grupo1 + this.grupo2) && e < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[e]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 10) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        for (var f = 0; f < this.equipos.length; f++) {
          if (f < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[f]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (f >= this.grupo1 && f < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[f]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 11) {
        this.grupo1 = 5;
        this.grupo2 = 6;
        for (var g = 0; g < this.equipos.length; g++) {
          if (g < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[g]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (g >= this.grupo1 && g < this.equipos.length) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[g]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 12) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        for (var h = 0; h < this.equipos.length; h++) {
          if (h < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= this.grupo1 && h < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2) && h < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 13) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
        for (var h = 0; h < this.equipos.length; h++) {
          if (h < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= this.grupo1 && h < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2) && h < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 14) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
        for (var h = 0; h < this.equipos.length; h++) {
          if (h < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= this.grupo1 && h < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2) && h < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 15) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
        for (var h = 0; h < this.equipos.length; h++) {
          if (h < this.grupo1) {
            this.grupo = new Grupo("Grupo1", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= this.grupo1 && h < (this.grupo1 + this.grupo2)) {
            this.grupo = new Grupo("Grupo2", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          } else if (h >= (this.grupo1 + this.grupo2) && h < this.equipos.length) {
            this.grupo = new Grupo("Grupo3", this.equipos[arraynum[h]]);
            this.grupo1Equipos.push(this.grupo);
          }

        }

      } else if (this.equipos.length = 16) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 4;
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

      } else if (this.equipos.length = 17) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 4;
        this.grupo4 = 5;
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

      } else if (this.equipos.length = 18) {
        this.grupo1 = 4;
        this.grupo2 = 4;
        this.grupo3 = 5;
        this.grupo4 = 5;
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

      } else if (this.equipos.length = 19) {
        this.grupo1 = 4;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
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

      } else if (this.equipos.length = 20) {
        this.grupo1 = 5;
        this.grupo2 = 5;
        this.grupo3 = 5;
        this.grupo4 = 5;
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
      if (this.getJuegos) {

      } else {
        alert ("Existen juegos pendientes aun");
      } 
    } else if (this.campeonato.cantidadGrupos == 2) {
    alert("Campeonato finalizado");
    }






    
  }

  getJuegos(cameponato: Campeonato): boolean {
    var estado = false;
    console.log("entra en buscar")
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

    //fchas


    let dateString1 = '2019-06-23T10:00:00';
    let newDate1 = new Date(dateString1);

    let dateString2 = '2019-06-23T13:00:00';
    let newDate2 = new Date(dateString2);

    let dateString3 = '2019-06-30T10:00';
    let newDate3 = new Date(dateString3);

    let dateString4 = '2019-06-30T13:00';
    let newDate4 = new Date(dateString4);

    let dateString5 = '2019-07-07T10:00';
    let newDate5 = new Date(dateString5);

    let dateString6 = '2019-07-07T13:00';
    let newDate6 = new Date(dateString6);

    this.arbitroAsignado.identificacion = "302540154";

    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[1].equipo, newDate1, "Pendiente", "Cot", this.arbitroAsignado));
    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[4].equipo, newDate2, "Pendiente", "Cot", this.arbitroAsignado));
    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[0].equipo, this.grupo1Equipos[2].equipo, newDate3, "Pendiente", "Cot", this.arbitroAsignado));
    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[3].equipo, this.grupo1Equipos[5].equipo, newDate4, "Pendiente", "Cot", this.arbitroAsignado));
    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[2].equipo, this.grupo1Equipos[1].equipo, newDate5, "Pendiente", "Cot", this.arbitroAsignado));
    this.juegosI.push(new Juego(this.identificador, this.identificadorCampeonato, this.grupo1Equipos[5].equipo, this.grupo1Equipos[4].equipo, newDate6, "Pendiente", "Cot", this.arbitroAsignado));
    var element = <HTMLInputElement>document.getElementById("btnExcel");
    element.disabled = true;

  }
  getLista()
  {

    return this.juegosI;
  }
}



