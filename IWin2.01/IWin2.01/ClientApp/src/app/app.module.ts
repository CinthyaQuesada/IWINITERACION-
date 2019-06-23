import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { RegistrarJugadorComponent } from './registrar-jugador/registrar-jugador.component';
import { EliminarJugadorComponent } from './eliminar-jugador/eliminar-jugador.component';
import { ListarJugadorComponent } from './listar-jugador/listar-jugador.component';
import { ModificarJugadorComponent } from './modificar-jugador/modificar-jugador.component';
import { GestionarJugadorComponent } from './gestionar-jugador/gestionar-jugador.component';
import { GestionarJuegoComponent } from './gestionar-juego/gestionar-juego.component';
import { ActualizarJuegoComponent } from './actualizar-juego/actualizar-juego.component';
import { jugadorservice } from './Service/jugadorservice';
import { HttpModule } from '@angular/http';
import { AgregarCampeonatoComponent } from './agregar-campeonato/agregar-campeonato.component';
import { campeonatoService } from './Service/campeonatoService';
import { juegoService } from './Service/juegoService';
import { LoginComponent } from './login/login.component';
import { ModuloAdministradorComponent } from './modulo-administrador/modulo-administrador.component';
import { ModuloEncargadoComponent } from './modulo-encargado/modulo-encargado.component';
import { ActualizarJugadorComponent } from './actualizar-jugador/actualizar-jugador.component';
import { LoginService } from './Service/login.service';
import { ArbitroService } from './Service/arbitro.service';
import { GestionarArbitroComponent } from './gestionar-arbitro/gestionar-arbitro.component';
import { EliminarArbitroComponent } from './eliminar-arbitro/eliminar-arbitro.component';
import { RegistrarArbitroComponent } from './registrar-arbitro/registrar-arbitro.component';
import { InscribirEquipoComponent } from './inscribir-equipo/inscribir-equipo.component';
import { InscripcionService } from './Service/inscripcion.service';
import { ListarInscripcionesComponent } from './listar-inscripciones/listar-inscripciones.component';
import { EquipoService } from './Service/equipo.service';
import { GestionarEquipoRepComponent } from './gestionar-equipo-rep/gestionar-equipo-rep.component';
import { GestionarEquipoAdmComponent } from './gestionar-equipo-adm/gestionar-equipo-adm.component';
import { EliminarEquipoAdmComponent } from './eliminar-equipo-adm/eliminar-equipo-adm.component';
import { EliminarEquipoRepComponent } from './eliminar-equipo-rep/eliminar-equipo-rep.component';
import { ModificarEquipoComponent } from './modificar-equipo/modificar-equipo.component';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component';
import { AgregarSancionColectivaComponent } from './agregar-sancion-colectiva/agregar-sancion-colectiva.component';
import { SancionEquipoComponent } from './sancion-equipo/sancion-equipo.component';
import { SancionColectivaService } from './Service/sancion-colectiva.service';
import { AgregarSancionIndividualComponent } from './agregar-sancion-individual/agregar-sancion-individual.component';
import { SancionIndividualComponent } from './sancion-individual/sancion-individual.component';
import { AgregarAnotacionesComponent } from './agregar-anotaciones/agregar-anotaciones.component';
import { AnotacionesComponent } from './anotaciones/anotaciones.component';
import { SancionIndividualService } from './Service/sancionIndividual.service';
import { AnotacionService } from './Service/anotacion.service';
import { ListarAnotacionesComponent } from './listar-anotaciones/listar-anotaciones.component';
import { ListarSancionesColectivasComponent } from './listar-sanciones-colectivas/listar-sanciones-colectivas.component';
import { ListarSancionesIndividualesComponent } from './listar-sanciones-individuales/listar-sanciones-individuales.component';
import { TablaPosicionesComponent } from './tabla-posiciones/tabla-posiciones.component';
import { TablaPosicionesRepComponent } from './tabla-posiciones-rep/tabla-posiciones-rep.component';
import { AdministrarResumenComponent } from './administrar-resumen/administrar-resumen.component';
import { ModificarCampeonatoComponent } from './modificar-campeonato/modificar-campeonato.component';
import { EliminarCampeonatoComponent } from './eliminar-campeonato/eliminar-campeonato.component';
import { GenerarFechasComponent } from './generar-fechas/generar-fechas.component';
import { ResumenComponent } from './resumen/resumen.component';


@NgModule({
  declarations: [
    AppComponent,
    ResumenComponent,
    AgregarSancionColectivaComponent,
    SancionEquipoComponent,
    NavMenuComponent,
    HomeComponent,
    FetchDataComponent,
    RegistrarJugadorComponent,
    EliminarJugadorComponent,
    ListarJugadorComponent,
    ModificarJugadorComponent,
    GestionarJugadorComponent,
    GestionarJuegoComponent,
    ActualizarJuegoComponent,
    RegistrarJugadorComponent,
    EliminarJugadorComponent,
    ListarJugadorComponent,
    GestionarJugadorComponent,
    AgregarCampeonatoComponent,
    LoginComponent,
    ModuloAdministradorComponent,
    ModuloEncargadoComponent,
    ActualizarJugadorComponent,
    GestionarArbitroComponent,
    EliminarArbitroComponent,
    RegistrarArbitroComponent,
    InscribirEquipoComponent,
    ListarInscripcionesComponent,
    GestionarEquipoRepComponent,
    GestionarEquipoAdmComponent,
    EliminarEquipoAdmComponent,
    EliminarEquipoRepComponent,
    RegistrarEquipoComponent,
    ModificarEquipoComponent,
    AgregarSancionIndividualComponent,
    SancionIndividualComponent,
    AgregarAnotacionesComponent,
    AnotacionesComponent,
    ListarAnotacionesComponent,
    ListarSancionesColectivasComponent,
    ListarSancionesIndividualesComponent,
    GestionarArbitroComponent,
    EliminarArbitroComponent,
    TablaPosicionesComponent,
    TablaPosicionesRepComponent,
    ModificarCampeonatoComponent,
    EliminarCampeonatoComponent,
    GenerarFechasComponent, AdministrarResumenComponent


  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },

      { path: 'gestionarJuego', component: GestionarJuegoComponent },

      { path: 'actualizarJuego', component: ActualizarJuegoComponent },
      { path: 'registrarJugador', component: RegistrarJugadorComponent },

      { path: 'eliminarJugador', component: EliminarJugadorComponent },


      { path: 'listarJugador', component: ListarJugadorComponent },


      { path: 'gestionarJugador', component: GestionarJugadorComponent },


      { path: 'listarJugador/:idEquipo', component: ListarJugadorComponent },

      { path: 'modificarJugador/:idEquipo', component: ModificarJugadorComponent },







      { path: 'eliminarJugador/:idEquipo', component: EliminarJugadorComponent },



      { path: 'registrarJugador/:idEquipo', component: RegistrarJugadorComponent },



      { path: 'gestionarJugador/:idEquipo', component: GestionarJugadorComponent },


      { path: 'login', component: LoginComponent },

      { path: 'moduloEncargado/:id', component: ModuloEncargadoComponent },
      { path: 'moduloAdministrador', component: ModuloAdministradorComponent },

      { path: 'registrar-arbitro', component: RegistrarArbitroComponent },
      { path: 'eliminar-arbitro', component: EliminarArbitroComponent },

      { path: 'gestionar-arbitro', component: GestionarArbitroComponent },

      { path: 'inscribir-equipo/:nombre', component: InscribirEquipoComponent },
      { path: 'listar-inscripciones', component: ListarInscripcionesComponent },

      { path: 'gestionar-equipo-adm', component: GestionarEquipoAdmComponent },
      { path: 'gestionar-equipo-rep/:nombre', component: GestionarEquipoRepComponent },
      { path: 'eliminar-equipo-rep/:nombre', component: EliminarEquipoRepComponent },
      { path: 'eliminar-equipo-adm', component: EliminarEquipoAdmComponent },

      { path: 'modificar-equipo/:nombre', component: ModificarEquipoComponent },

      { path: 'registrar-equipo', component: RegistrarEquipoComponent },

      { path: 'agregarSancionColectiva', component: AgregarSancionColectivaComponent },
      { path: 'agregarSancionIndividual', component: AgregarSancionIndividualComponent },
      { path: 'agregarAnotaciones', component: AgregarAnotacionesComponent },
      { path: 'listarAnotaciones', component: ListarAnotacionesComponent },
      { path: 'listarSancionesColectivas', component: ListarSancionesColectivasComponent },
      { path: 'listarSancionesIndividuales', component: ListarSancionesIndividualesComponent },
      { path: 'modificarCampeonato', component: ModificarCampeonatoComponent },

      { path: 'eliminarCampeonato', component: EliminarCampeonatoComponent },

      { path: 'agregarCampeonato', component: AgregarCampeonatoComponent },
      { path: 'generarFechas', component: GenerarFechasComponent },

      { path: 'tabla-posiciones', component: TablaPosicionesComponent },

      { path: 'tabla-posiciones-rep/:idC', component: TablaPosicionesRepComponent },


      { path: 'resultado', component: AdministrarResumenComponent },
    ])
  ],
  providers: [jugadorservice, AnotacionService, SancionColectivaService, SancionIndividualService, campeonatoService, juegoService, LoginService, ArbitroService, InscripcionService, EquipoService],
  bootstrap: [AppComponent],
})
export class AppModule { }
