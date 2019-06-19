using Iwin1._2.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class sancionColectiva
    {
    int identificador;
    Equipo equipo;
    int juego;
     string tipo;
        string motivo;
   
        public override string ToString()
        {
            return base.ToString();
        }

        public sancionColectiva()
        {
        }

        public sancionColectiva(int identificador, Equipo equipo, int juego, string tipo, string motivo)
        {
            this.Identificador = identificador;
            this.Equipo = equipo;
            this.Juego = juego;
            this.Tipo = tipo;
            this.Motivo = motivo;
        }

        public int Identificador { get => identificador; set => identificador = value; }
        public Equipo Equipo { get => equipo; set => equipo = value; }
      
        public string Tipo { get => tipo; set => tipo = value; }
        public string Motivo { get => motivo; set => motivo = value; }
        public int Juego { get => juego; set => juego = value; }
    }
}
