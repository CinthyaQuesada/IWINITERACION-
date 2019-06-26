using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Fecha
    {

        private DateTime fechaT;


        public DateTime FechaT { get => fechaT; set => fechaT = value; }

        public Fecha()
        {

        }

        public Fecha(DateTime fechaT, string contrasenia, int tipoUsuario)
        {
            this.fechaT = fechaT;
        }


    }
}
