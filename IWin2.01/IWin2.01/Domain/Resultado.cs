using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Resultado
    {

        int id;
        Juego juego;
        Equipo equipo;
        int anotaciones;
        int sancionesColectivas;
        int sancionesIndividuales;

        public Resultado()
        {
        }

        public Resultado(int id, Juego juego, Equipo equipo, int anotaciones, int sancionesColectivas, int sancionesIndividuales)
        {
            this.Id = id;
            this.Juego = juego;
            this.Equipo = equipo;
            this.Anotaciones = anotaciones;
            this.SancionesColectivas = sancionesColectivas;
            this.SancionesIndividuales = sancionesIndividuales;
        }

        public int Id { get => id; set => id = value; }
        public Juego Juego { get => juego; set => juego = value; }
        public Equipo Equipo { get => equipo; set => equipo = value; }
        public int Anotaciones { get => anotaciones; set => anotaciones = value; }
        public int SancionesColectivas { get => sancionesColectivas; set => sancionesColectivas = value; }
        public int SancionesIndividuales { get => sancionesIndividuales; set => sancionesIndividuales = value; }
    }
}
