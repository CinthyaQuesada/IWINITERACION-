using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Iwin1._2.Domain
{
    public class Arbitro
    {
        private string identificacion;
        private string nombre;
        private string apellidos;
        private string categoria;
        private string telefono;


        public string Identificacion { get => identificacion; set => identificacion = value; }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Apellidos { get => apellidos; set => apellidos = value; }
        public string Telefono { get => telefono; set => telefono = value; }
        public string Categoria { get => categoria; set => categoria = value; }

        public Arbitro()
        {

        }

        public Arbitro(string identificacion, string nombre, string apellidos, string telefono, string categoria)
        {
            this.identificacion = identificacion;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.telefono = telefono;
            this.categoria = categoria;
        }

        public Arbitro(string nombre, string apellidos, string telefono, string categoria)
        {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.telefono = telefono;
            this.categoria = categoria;

        }

    }

}