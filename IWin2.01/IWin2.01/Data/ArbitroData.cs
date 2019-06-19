using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;

namespace Iwin1._2.Data
{
    public class ArbitroData
    {

        string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

        public ArbitroData()
        {

        }


        //LoginData login;

        public List<Arbitro> listarArbitros()
        {
            Arbitro arbitro;
            List<Arbitro> arbitroList = new List<Arbitro>();
            string connectionString1 = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select * from Arbitro";
            MySqlConnection databaseConnection = new MySqlConnection(connectionString1);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 100;
            MySqlDataReader reader;

            try
            {
                databaseConnection.Open();
                reader = commandDatabase.ExecuteReader();
                // Si se encontraron datos
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        arbitro = new Arbitro();
                        arbitro.Identificacion = reader.GetString("identificacion");
                        arbitro.Nombre = reader.GetString("nombre");
                        arbitro.Categoria = reader.GetString("categoria");
                        arbitro.Apellidos = reader.GetString("apellidos");
                        arbitro.Telefono = reader.GetString("telefono");

                        arbitroList.Add(arbitro);

                    }
                }
                else
                {
                    Console.WriteLine("No se encontro nada");
                }

                databaseConnection.Close();
            }
            catch (Exception ex)
            {

            }
            return arbitroList;
        }


        public Arbitro InformacionArbitro(int identificacion)
        {
            Arbitro arbitro = null;
            string query = "Select identificador, nombre, apellidos,categoria,telefono FROM Arbitro WHERE identificacion='" + identificacion + "'";
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;
            try
            {
                databaseConnection.Open();
                reader = commandDatabase.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        arbitro = new Arbitro();
                        arbitro.Identificacion = reader.GetString("identificacion");
                        arbitro.Nombre = reader.GetString("nombre");
                        arbitro.Categoria = reader.GetString("categoria");
                        arbitro.Apellidos = reader.GetString("apellidos");
                        arbitro.Telefono = reader.GetString("telefono");
                    }
                }
                else
                {
                    Console.WriteLine("No se encontro nada");
                }

                databaseConnection.Close();
            }
            catch (Exception ex)
            {

            }
            return arbitro;
        }
        public List<Arbitro> buscarArbitros(string nombreArbitro)
        {
            Arbitro arbitro;
            List<Arbitro> arbitroList = new List<Arbitro>();

            return arbitroList;
        }

        public Arbitro buscarArbitro(int id)
        {
            Arbitro arbitro = null;


            string query = "SELECT identificacion,nombre, apellidos,categoria,telefono FROM Arbitro WHERE identificacion='" + id + "'";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            try
            {
                databaseConnection.Open();
                reader = commandDatabase.ExecuteReader();
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        Console.WriteLine(reader.GetInt32(0) + " - " + reader.GetInt32(1) + " - " + reader.GetString(2) + " - " + reader.GetString(3) + " - " + reader.GetDateTime(4) + " - " + reader.GetDateTime(5) + " - " + reader.GetString(6) + " - " + reader.GetInt32(7));
                        arbitro = new Arbitro();
                        arbitro = new Arbitro();
                        arbitro.Identificacion = reader.GetString("identificacion");
                        arbitro.Nombre = reader.GetString("nombre");
                        arbitro.Categoria = reader.GetString("categoria");
                        arbitro.Apellidos = reader.GetString("apellidos");
                        arbitro.Telefono = reader.GetString("telefono");
                    }
                }
                else
                {
                    Console.WriteLine("No se encontro nada");
                }

                databaseConnection.Close();
            }
            catch (Exception ex)
            {

            }
            return arbitro;
        }



        public int eliminarArbitro(int id)
        {
            string query = "delete from Arbitro where identificador=" + id;
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            databaseConnection.Open();
            int resultado = commandDatabase.ExecuteNonQuery();
            databaseConnection.Close();
            return resultado;
        }





        public List<Arbitro> d()
        {

            Arbitro arbitro;
            List<Arbitro> arbitroList = new List<Arbitro>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select * from Arbitro ";
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
                    arbitro = new Arbitro();
                    arbitro.Identificacion = reader.GetString("identificacion");
                    arbitro.Nombre = reader.GetString("nombre");
                    arbitro.Categoria = reader.GetString("categoria");
                    arbitro.Apellidos = reader.GetString("apellidos");
                    arbitro.Telefono = reader.GetString("numero_telefono");
                    arbitroList.Add(arbitro);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();


            return arbitroList;
        }

        public void eliminar(string id)
        {
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Borrar la fila con ID 1
            string query = "DELETE FROM Arbitro WHERE identificacion ='" + id + "'";
            //MessageBox.Show("ENTRAAA");
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;
            try
            {
                databaseConnection.Open();
                reader = commandDatabase.ExecuteReader();
                databaseConnection.Close();
            }
            catch (Exception ex)
            {

            }

        }



        public int insertar(Arbitro arbitro)
        {
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "INSERT INTO Arbitro(identificacion,nombre,apellidos,categoria, numero_telefono) VALUES ('" + arbitro.Identificacion + "','" + arbitro.Nombre + "', '" + arbitro.Apellidos + "', '"
                + arbitro.Categoria + "' ,'" + arbitro.Telefono + "')";
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            //MessageBox.Show(query);
            MySqlDataReader reader;
            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();
            //MessageBox.Show("EWE");
            databaseConnection.Close();

            return 1;
        }


        public Arbitro informacionArbitro(string nombre)
        {
            Arbitro arbitro = new Arbitro();

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select * from Arbitro where identificacion='" + nombre + "'";

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
                    arbitro = new Arbitro();
                    arbitro.Identificacion = reader.GetString("identificacion");
                    arbitro.Nombre = reader.GetString("nombre");
                    arbitro.Categoria = reader.GetString("categoria");
                    //arbitro.Telefono = reader.GetString("telefono");


                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();
            return arbitro;
        }


        public List<Arbitro> infoArbitro(string nombre)
        {

            Arbitro arbitro = new Arbitro();
            List<Arbitro> arbitroList = new List<Arbitro>();

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select * from Arbitro where nombre LIKE '%" + nombre + "%'";

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
                    arbitro = new Arbitro();
                    arbitro.Identificacion = reader.GetString("identificacion");
                    arbitro.Apellidos = reader.GetString("apellidos");
                    arbitro.Nombre = reader.GetString("nombre");
                    arbitro.Categoria = reader.GetString("categoria");
                    arbitro.Telefono = reader.GetString("numero_telefono");
                    arbitroList.Add(arbitro);

                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();
            return arbitroList;
        }
    }
}
