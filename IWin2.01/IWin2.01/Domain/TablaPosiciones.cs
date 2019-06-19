using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class TablaPosiciones {
        private int golesFavor;
        private int golesContra;
        private int golDif;
        private int partidosJugados;
        private int partidosGanados;
        private int partidosPerdidos;
        private int partidosEmpatados;
        private int cantidadPuntos;
        Campeonato campeonato = new Campeonato();
        Equipo equipo = new Equipo();

        public int GolesFavor { get => golesFavor; set => golesFavor = value; }
        public int GolesContra { get => golesContra; set => golesContra = value; }
        public int GolDif { get => golDif; set => golDif = value; }
        public int PartidosJugados { get => partidosJugados; set => partidosJugados = value; }
        public int PartidosGanados { get => partidosGanados; set => partidosGanados = value; }
        public int PartidosPerdidos { get => partidosPerdidos; set => partidosPerdidos = value; }
        public int PartidosEmpatados { get => partidosEmpatados; set => partidosEmpatados = value; }
        public int CantidadPuntos { get => cantidadPuntos; set => cantidadPuntos = value; }
        public Campeonato Campeonato { get => campeonato; set => campeonato = value; }
        public Equipo Equipo  { get =>equipo; set => equipo = value; }

        public TablaPosiciones(int gF, int gC, int gD, int pj, int pg, int pp, int pe, int puntos, Campeonato campeonato, Equipo equipo)
        {
            this.golesFavor = gF;
            this.GolesContra = gC;
            this.golDif = gD;
            this.partidosJugados = pj;
            this.PartidosPerdidos = pp;
            this.partidosEmpatados = pe;
            this.cantidadPuntos = puntos;
            this.campeonato = campeonato;
            this.equipo = equipo;
        }
        public TablaPosiciones()
        {

        }
    }
}
