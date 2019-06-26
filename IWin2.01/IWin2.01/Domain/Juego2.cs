using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Juego2
    {
        int identificador;
        Campeonato identificadorCampeonato;
        Equipo equipoA;
        Equipo equipoB;
        DateTime fechaJuego;
        String estadoJuego;
        String lugar;
        Arbitro arbitroAsignado;

        public Juego2()
        {

        }

        public Juego2(int identificador, Campeonato identificadorCampeonato, Equipo equipoA, Equipo equipoB, DateTime fechaJuego, String estadoJuego, String lugar, Arbitro arbitroAsignado)
        {
            this.identificador = identificador;
            this.identificadorCampeonato = identificadorCampeonato;
            this.equipoA = equipoA;
            this.equipoB = equipoB;
            this.fechaJuego = fechaJuego;
            this.estadoJuego = estadoJuego;
            this.lugar = lugar;
            this.arbitroAsignado = arbitroAsignado;

        }

        public int Identificador { get => identificador; set => identificador = value; }
        public Campeonato IdentificadorCampeonato { get => identificadorCampeonato; set => identificadorCampeonato = value; }
        public Equipo EquipoA { get => equipoA; set => equipoA = value; }
        public Equipo EquipoB { get => equipoB; set => equipoB = value; }
        public DateTime FechaJuego { get => fechaJuego; set => fechaJuego = value; }
        public String EstadoJuego { get => estadoJuego; set => estadoJuego = value; }
        public String Lugar { get => lugar; set => lugar = value; }
        public Arbitro ArbitroAsignado { get => arbitroAsignado; set => arbitroAsignado = value; }

    }
}