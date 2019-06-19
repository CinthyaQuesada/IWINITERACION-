using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Inscripcion
    {
        private int identificador;
        private Equipo equipo;
        private Campeonato campeonato;
        private DateTime fechaInscripcion;


        public int Identificador { get => identificador; set => identificador= value; }
        public Campeonato Campeonato { get => campeonato; set => campeonato = value; }
        public Equipo Equipo{ get => equipo; set => equipo = value; }
        public DateTime FechaInscripcion { get => fechaInscripcion; set => fechaInscripcion = value; }


    public Inscripcion()
    {
            this.identificador = 1;
    }

    public Inscripcion(Campeonato campeonato, Equipo equipo, DateTime fechaInscripcion)
    {
        this.campeonato = campeonato;                
        this.equipo = equipo;
        this.fechaInscripcion = fechaInscripcion;
    }
}
}
