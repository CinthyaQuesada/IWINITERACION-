using Iwin1._2.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Iwin1._2.Domain
{
    public class sancionIndivisual
    {
        int identificador;
        Equipo equipo;
        int juego;
        Jugador jugador;
        string tarjeta;
        string motivo;
        string castigo;

        public sancionIndivisual()
        {
        }

        public sancionIndivisual(int identificador, Equipo equipo, int juego, Jugador jugador, string tarjeta, string motivo, string castigo)
        {
            this.identificador = identificador;
            this.equipo = equipo;
            this.juego = juego;
            this.jugador = jugador;
            this.tarjeta = tarjeta;
            this.motivo = motivo;
            this.Castigo = castigo;
        }

        public int Identificador { get => identificador; set => identificador = value; }
        public Equipo Equipo { get => equipo; set => equipo = value; }
        public int Juego { get => juego; set => juego = value; }
        public Jugador Jugador { get => jugador; set => jugador = value; }
        public string Tarjeta { get => tarjeta; set => tarjeta = value; }
        public string Motivo { get => motivo; set => motivo = value; }
        public string Castigo { get => castigo; set => castigo = value; }
    }
}
