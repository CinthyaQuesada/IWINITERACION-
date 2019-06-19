using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class ResultadoFinal
{
        int id;
        Campeonato campeonato=new Campeonato();
        Juego juego=new Juego();
        Equipo equipo=new Equipo();
        int golesFav;
        int golesC;
        int puntos;

        public int Id { get => id; set => id = value; }
        public Juego Juego { get => juego; set => juego = value; }
        public Equipo Equipo { get => equipo; set => equipo = value; }
        public Campeonato Campeonato { get => campeonato; set => campeonato = value; }
        public int GolesFavor { get => golesFav; set => golesFav = value; }
        public int golesContra { get => golesC; set => golesC = value; }
        public int Puntos { get => puntos; set => puntos = value; }

        public ResultadoFinal()
        {

        }

        public ResultadoFinal(int id, Juego juego, Equipo equipo, Campeonato campeonato,int golesF, int golesC, int puntos)
        {
            this.id = id;
            this.juego = juego;
            this.equipo = equipo;
            this.campeonato = campeonato;
            this.golesC = golesC;
            this.golesFav = golesF;
            this.puntos = puntos;
        }
    }
}
