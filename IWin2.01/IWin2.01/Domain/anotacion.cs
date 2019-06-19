using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Iwin1._2.Domain
{
    public class anotacion
    {
        int identificador;
        Equipo equipo;
        Jugador jugador;
        int juego;
        int cantidadGoles;

        public anotacion()
        {
        }

        public anotacion(int identificador, Equipo equipo, Jugador jugador, int juego, int cantidadGoles)
        {
            this.identificador = identificador;
            this.equipo = equipo;
            this.jugador = jugador;
            this.juego = juego;
            this.cantidadGoles = cantidadGoles;
        }

        public int Identificador { get => identificador; set => identificador = value; }
        public Equipo Equipo { get => equipo; set => equipo = value; }
        public Jugador Jugador { get => jugador; set => jugador = value; }
        public int Juego { get => juego; set => juego = value; }
        public int CantidadGoles { get => cantidadGoles; set => cantidadGoles = value; }
    }
    }
