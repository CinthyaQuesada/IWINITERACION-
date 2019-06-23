import { Component, OnInit, Input, Inject } from '@angular/core';
import { Resultado } from '../Domain/resultado.model';
import { SancionColectivaService } from '../Service/sancion-colectiva.service';
import { Juego } from '../Domain/juego.model';
import { HttpClient } from '@angular/common/http';
import { Equipo } from '../Domain/Equipo.model';
import { Alert } from 'selenium-webdriver';
import { Jugador } from '../Domain/Jugador.model';
import { SancionIndividual } from '../Domain/sancionIndividual.model';
import { Anotacion } from '../Domain/anotacion.model';
import { NoopInterceptor } from '@angular/common/http/src/interceptor';
import { Resultado2 } from '../Domain/Resultado2';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }



  
  
 
}
