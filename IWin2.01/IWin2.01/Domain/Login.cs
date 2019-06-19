using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Login
{

        private string nombreUsuario;
        private string contrasenia;
        private int tipoUsuario;


        public string NombreUsuario { get => nombreUsuario; set => nombreUsuario = value; }
        public string Contrasenia { get => contrasenia; set => contrasenia = value; }
        public int TipoUsuario { get => tipoUsuario; set => tipoUsuario = value; }


        public Login()
        {

        }

        public Login(string nombreUsuario, string contrasenia, int tipoUsuario)
        {
            this.nombreUsuario = nombreUsuario;
            this.contrasenia = contrasenia;
            this.tipoUsuario = tipoUsuario;
        }

    
}
}
