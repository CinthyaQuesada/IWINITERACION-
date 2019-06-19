using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Iwin1._2.Domain
{
    public class Equipo
    {
        private int identificador;
        private string nombreEquipo;
        private string nombreRepresentante;
        private string categoria;
        private string rama;
        private string logo;
        private string canchaSede;
        private string telefonoRepresentante;
        private string contraseniaRepresentante;
        List<Jugador> jugadores=new List<Jugador>();

        public int Identificador { get => identificador; set => identificador = value; }
        public string NombreEquipo { get => nombreEquipo; set => nombreEquipo = value; }
        public string NombreRepresentante { get => nombreRepresentante; set => nombreRepresentante = value; }
        public string Categoria { get => categoria; set => categoria = value; }
        public string Rama { get => rama; set => rama = value; }
        public string Logo { get => logo; set => logo = value; }
        public string CanchaSede { get => canchaSede; set => canchaSede = value; }
        public string TelefonoRepresentante { get => telefonoRepresentante; set => telefonoRepresentante = value; }
        public string ContraseniaEquipo { get => contraseniaRepresentante; set => contraseniaRepresentante = value; }

        public Equipo()
        {
            this.identificador = 1;
        }

        public Equipo(string nombreEquipo, string nombreRepresentante, string categoria, string rama, string canchaSede, string telefonoRepresentante, string contraseniaRepresentante)
        {
            this.nombreEquipo = nombreEquipo;
            this.nombreRepresentante = nombreRepresentante;
            this.categoria = categoria;
            this.rama = rama;
            this.canchaSede = canchaSede;
            this.telefonoRepresentante = telefonoRepresentante;
            this.contraseniaRepresentante = contraseniaRepresentante;
        }

        public Equipo(string nombreEquipo, string nombreRepresentante, string categoria, string rama, string logo, string canchaSede, string telefonoRepresentante, string contraseniaRepresentante)
        {
            this.nombreEquipo = nombreEquipo;
            this.nombreRepresentante = nombreRepresentante;
            this.categoria = categoria;
            this.rama = rama;
            this.logo = logo;
            this.canchaSede = canchaSede;
            this.telefonoRepresentante = telefonoRepresentante;
            this.contraseniaRepresentante = contraseniaRepresentante;
        }

    }

}
