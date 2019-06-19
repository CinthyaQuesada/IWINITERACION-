using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
   public class Jugador
    {
        String identificacion;
        String nombre;
        String apellidos;
        DateTime fechaNacimiento;
        int idEquipo;

        public Jugador()
        {
        }

        public Jugador(string identificacion, string nombre, string apellidos, DateTime fechaNacimiento, int idEquipo)
        {
            this.identificacion = identificacion;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.fechaNacimiento = fechaNacimiento;
            this.idEquipo = idEquipo;
        }

        public string Identificacion { get => identificacion; set => identificacion = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellidos { get => apellidos; set => apellidos = value; }
        public DateTime FechaNacimiento { get => fechaNacimiento; set => fechaNacimiento = value; }
        public int IdEquipo { get => idEquipo; set => idEquipo = value; }
    }
}
