using Iwin1._2.Domain;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Data
{
    public class LoginData
{
        String connectionInfo = "Server=db4free.net;Port=3306;Database=iwincjm;Uid=cjmsystems;Pwd=CJMSYSTEMS;";

        public LoginData()
        {
        }

        public void insertar(Login login)
        {
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "INSERT INTO login(`nombre_usuario`, `contrasenia`, `tipo_usuario`) VALUES ('" + login.NombreUsuario + "', '" + login.Contrasenia + "', '"
                + login.TipoUsuario + "')";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;

           
                databaseConnection.Open();
                MySqlDataReader myReader = commandDatabase.ExecuteReader();



                databaseConnection.Close();
            
                // Mostrar cualquier error

     
        }
        public int  iniciar(Login login)
        {
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "INSERT INTO login(`nombre_usuario`, `contrasenia`, `tipoUsuario`) VALUES ('" + login.NombreUsuario + "', '" + login.Contrasenia + "', '"
                + login.TipoUsuario + "')";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;

            
                databaseConnection.Open();
                MySqlDataReader myReader = commandDatabase.ExecuteReader();



                databaseConnection.Close();
            return 1;
            
        }



        public List<Login> usuarios()
        {
            Login login = null;
            List<Login> lista = new List<Login>();
           
            string query = "SELECT * FROM Login; ";
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);

            commandDatabase.CommandTimeout = 70;
            MySqlDataReader reader;


            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();


            if (reader.HasRows)
            {
                while (reader.Read())
                {
                   login = new Login();
                   login.NombreUsuario = reader.GetString("nombre_usuario");
                   login.Contrasenia= reader.GetString("contrasenia");
                   login.TipoUsuario = reader.GetInt32("tipoUsuario");
                   lista.Add(login);

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }



            databaseConnection.Close();
            return lista;
        }

            
    }
}
