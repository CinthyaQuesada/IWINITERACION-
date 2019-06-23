import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { jugadorservice } from '../Service/jugadorservice';
import { Juego } from '../Domain/juego.model';
import { Campeonato } from '../Domain/Campeonato.model';
import { SancionColectiva } from '../Domain/sancionColectiva.model';
import { Resultado } from '../Domain/resultado.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { SancionIndividualService } from '../Service/sancionIndividual.service';
import { SancionIndividual } from '../Domain/sancionIndividual.model';
import { AnotacionesComponent } from '../anotaciones/anotaciones.component';
import { AnotacionService } from '../Service/anotacion.service';
import { Anotacion } from '../Domain/anotacion.model';
import { ResumenComponent } from '../resumen/resumen.component';
import { Resultado2 } from '../Domain/Resultado2';
@Component({
  selector: 'app-administrar-resumen',
  templateUrl: './administrar-resumen.component.html',
  styleUrls: ['./administrar-resumen.component.css']
})
export class AdministrarResumenComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }


 

}
