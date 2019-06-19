using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;
//using System.Windows.Forms;

namespace Iwin1._2.Data
{
    public class EquipoData
    {

        string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";

        public EquipoData()
        {

        }


        //LoginData login;

        public List<Equipo> listarEquipos()
        {
            Equipo equipo;
            List<Equipo> equipoList = new List<Equipo>();
            string connectionString1 = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "select * from equipo where identificador=4";

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
                        //                   ID                              First name                  Last Name                    Address
                        Console.WriteLine(reader.GetInt32(0) + " - " + reader.GetInt32(1) + " - " + reader.GetString(2) + " - " + reader.GetString(3) + " - " + reader.GetDateTime(4) + " - " + reader.GetDateTime(5) + " - " + reader.GetString(6) + " - " + reader.GetInt32(7));
                        equipo = new Equipo();
                        equipo.Identificador = reader.GetInt32("identificador");
                        equipo.NombreEquipo = reader.GetString("nombre_equipo");
                        equipo.Categoria = reader.GetString("categoria");
                        equipo.Rama = reader.GetString("rama");
                        equipo.CanchaSede = reader.GetString("cancha_sede");
                        equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                        equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");

                        equipoList.Add(equipo);
                        // Ejemplo para mostrar en el listView1 :
                        //string[] row = { reader.GetString(0), reader.GetString(1), reader.GetString(2), reader.GetString(3) };
                        //var listViewItem = new ListViewItem(row);
                        //listView1.Items.Add(listViewItem);
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
            return equipoList;
        }


        public Equipo InformacionEquipo(int identificadorE)
        {
            Equipo Equipo = null;

            string query = "Select identificador, nombre_equipo, nombre_representante,logo,categoria,rama ,cancha_sede,telefono_representante FROM equipo WHERE identificador='" + identificadorE + "'"; ;

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
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
                        //                   ID                              First name                  Last Name                    Address
                        Console.WriteLine(reader.GetInt32(0) + " - " + reader.GetInt32(1) + " - " + reader.GetString(2) + " - " + reader.GetString(3) + " - " + reader.GetDateTime(4) + " - " + reader.GetDateTime(5) + " - " + reader.GetString(6) + " - " + reader.GetInt32(7));
                        Equipo = new Equipo();
                        Equipo.Identificador = reader.GetInt32("identificador");
                        Equipo.NombreEquipo = reader.GetString("nombre_equipo");
                        Equipo.Categoria = reader.GetString("categoria");
                        Equipo.Rama = reader.GetString("rama");
                        Equipo.CanchaSede = reader.GetString("cancha_sede");
                        Equipo.TelefonoRepresentante = reader.GetString("telefono_representante");


                        // Ejemplo para mostrar en el listView1 :
                        //string[] row = { reader.GetString(0), reader.GetString(1), reader.GetString(2), reader.GetString(3) };
                        //var listViewItem = new ListViewItem(row);
                        //listView1.Items.Add(listViewItem);
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
            return Equipo;
        }
        public List<Equipo> buscarEquipos(string nombreEquipo)
        {
            Equipo Equipo;
            List<Equipo> EquipoList = new List<Equipo>();

            return EquipoList;
        }

        public Equipo buscarEquipo(string id)
        {
            Equipo Equipo = null;


            string query = "SELECT identificador, nombre_equipo, nombre_representante,categoria,rama,logo, cancha_sede,telefono_representante FROM Equipo WHERE nombre_equipo='" + id + "'";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;


            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();


            // Si se encontraron datos
            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    //                   ID                              First name                  Last Name                    Address
                    Console.WriteLine(reader.GetInt32(0) + " - " + reader.GetInt32(1) + " - " + reader.GetString(2) + " - " + reader.GetString(3) + " - " + reader.GetDateTime(4) + " - " + reader.GetDateTime(5) + " - " + reader.GetString(6) + " - " + reader.GetInt32(7));
                    Equipo = new Equipo();
                    Equipo.Identificador = reader.GetInt32("identificador");
                    Equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    Equipo.Categoria = reader.GetString("categoria");
                    Equipo.Rama = reader.GetString("rama");
                    Equipo.CanchaSede = reader.GetString("cancha_sede");
                    Equipo.TelefonoRepresentante = reader.GetString("telefono_representante");


                    // Ejemplo para mostrar en el listView1 :
                    //string[] row = { reader.GetString(0), reader.GetString(1), reader.GetString(2), reader.GetString(3) };
                    //var listViewItem = new ListViewItem(row);
                    //listView1.Items.Add(listViewItem);
                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }

            databaseConnection.Close();


            return Equipo;
        }



        public int insertarEquipo(Equipo equipo)
        {



            string query = "InsertarEquipo";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandType = System.Data.CommandType.StoredProcedure;
            commandDatabase.CommandTimeout = 60;

            databaseConnection.Open();
            commandDatabase.CommandType = System.Data.CommandType.StoredProcedure;
            commandDatabase.Parameters.AddWithValue("@nombreE", equipo.NombreEquipo);
            commandDatabase.Parameters.AddWithValue("@nombreRep", equipo.NombreRepresentante);
            commandDatabase.Parameters.AddWithValue("@categoriaC", equipo.Categoria);
            commandDatabase.Parameters.AddWithValue("@ramaC", equipo.Rama);
            commandDatabase.Parameters.AddWithValue("@canchaSede", equipo.CanchaSede);
            commandDatabase.Parameters.AddWithValue("@telefonoR", equipo.TelefonoRepresentante);
            commandDatabase.Parameters.AddWithValue("@contrasenia", equipo.ContraseniaEquipo);
            int resultado = commandDatabase.ExecuteNonQuery();


            databaseConnection.Close();
            return resultado;

        }

        public int eliminarEquipo(int id)
        {

            string query = "delete from equipo where identificador=" + id;
            //MessageBox.Show(query);

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);

            commandDatabase.CommandTimeout = 60;

            databaseConnection.Open();

            int resultado = commandDatabase.ExecuteNonQuery();


            databaseConnection.Close();
            return resultado;

        }


        public int modificarEquipo(Equipo equipo)
        {
            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";


            string query = "Update Equipo set nombre_equipo='" + equipo.NombreEquipo + "' where identificador='" + equipo.Identificador + "";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandType = System.Data.CommandType.StoredProcedure;
            commandDatabase.CommandTimeout = 60;

            databaseConnection.Open();

            int resultado = commandDatabase.ExecuteNonQuery();


            databaseConnection.Close();
            return resultado;

        }



        public List<Equipo> d()
        {

            Equipo equipo;
            List<Equipo> equipoList = new List<Equipo>();
            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            // Tu consulta en SQL
            string query = "select * from equipo ";

            // Prepara la conexión
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 70;
            MySqlDataReader reader;

            // A consultar !

            // Abre la base de datos
            databaseConnection.Open();

            // Ejecuta la consultas
            reader = commandDatabase.ExecuteReader();

            // Hasta el momento todo bien, es decir datos obtenidos

            // IMPORTANTE :#
            // Si tu consulta retorna un resultado, usa el siguiente proceso para obtener datos

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    equipo = new Equipo();
                    equipo.Identificador = reader.GetInt32("identificador");
                    equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    equipo.Categoria = reader.GetString("categoria");
                    equipo.Rama = reader.GetString("rama");
                    equipo.CanchaSede = reader.GetString("cancha_sede");
                    equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    equipo.NombreRepresentante = reader.GetString("nombre_representante");
                    equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");

                    equipoList.Add(equipo);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            return equipoList;
        }

        public void eliminar(int id)
        {
            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            // Borrar la fila con ID 1
            string query = "DELETE FROM equipo WHERE identificador =" + id;
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
            ;
        }


        public void modificar(Equipo equipo, int id)
        {


            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "UPDATE equipo  SET nombre_equipo='" + equipo.NombreEquipo + "' , nombre_representante='" + equipo.NombreRepresentante + "' , cancha_sede='" + equipo.CanchaSede + "'" +
            ", telefono_representante= '" + equipo.TelefonoRepresentante + "'," + "contrasenia_equipo='" + equipo.ContraseniaEquipo + "'  WHERE identificador='" + id + "'";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;


            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();

            databaseConnection.Close();



        }

        public int insertar(Equipo equipo)
        {


            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "INSERT INTO equipo(`nombre_equipo`, `nombre_representante`, `categoria`, `rama`,`logo`,`telefono_representante`,`cancha_sede`,`contrasenia_equipo`) VALUES ('" + equipo.NombreEquipo + "', '" + equipo.NombreRepresentante + "', '"
                + equipo.Categoria + "' ,'" + equipo.Rama + "', '" + equipo.Logo + "', '" + equipo.TelefonoRepresentante + "', '" + equipo.CanchaSede + "', '" + equipo.ContraseniaEquipo + "')";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;

            try
            {
                databaseConnection.Open();
                MySqlDataReader myReader = commandDatabase.ExecuteReader();



                databaseConnection.Close();
                ///login.insertar(new Login(equipo.NombreEquipo, equipo.ContraseniaEquipo, 1));
            }
            catch (Exception ex)
            {
                // Mostrar cualquier error

            }
            return 1;
        }


        public Equipo informacionEquipo(string nombre)
        {

            Equipo equipo = new Equipo();

            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "select * from equipo where nombre_equipo='" + nombre + "'";

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
                    equipo = new Equipo();
                    equipo.Identificador = reader.GetInt32("identificador");
                    equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    equipo.Categoria = reader.GetString("categoria");
                    equipo.Rama = reader.GetString("rama");
                    equipo.CanchaSede = reader.GetString("cancha_sede");
                    equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    equipo.NombreRepresentante = reader.GetString("nombre_representante");
                    equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");



                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();
            Console.WriteLine(equipo.Categoria);
            return equipo;
        }


        public List<Equipo> infoEquipo(string nombre)
        {

            Equipo equipo = new Equipo();
            List<Equipo> equipoList = new List<Equipo>();

            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "select * from equipo where nombre_equipo='" + nombre + "'";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 1000;
            MySqlDataReader reader;
            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    equipo = new Equipo();
                    equipo.Identificador = reader.GetInt32("identificador");
                    equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    equipo.Categoria = reader.GetString("categoria");
                    equipo.Rama = reader.GetString("rama");
                    equipo.CanchaSede = reader.GetString("cancha_sede");
                    equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    equipo.NombreRepresentante = reader.GetString("nombre_representante");
                    equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");

                    equipoList.Add(equipo);


                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();

            return equipoList;
        }

        public List<Equipo> infoRep(string nombre)
        {

            Equipo equipo = new Equipo();
            List<Equipo> equipoList = new List<Equipo>();

            string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118; old guids=true;";
            string query = "select * from equipo where nombre_representante='" + nombre + "'";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 1000;
            MySqlDataReader reader;
            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    equipo = new Equipo();
                    equipo.Identificador = reader.GetInt32("identificador");
                    equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    equipo.Categoria = reader.GetString("categoria");
                    equipo.Rama = reader.GetString("rama");
                    equipo.CanchaSede = reader.GetString("cancha_sede");
                    equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    equipo.NombreRepresentante = reader.GetString("nombre_representante");
                    equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");

                    equipoList.Add(equipo);


                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();

            return equipoList;
        }
    }
}

