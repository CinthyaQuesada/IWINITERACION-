using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;

namespace Iwin1._2.Data
{
    public class CampeonatoData
    {

        //string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118;old guids=true;";
        string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

        public List<Campeonato> listarCampeonatos()
        {

            Campeonato campeonato;
            List<Campeonato> campeonatoList = new List<Campeonato>();
            
            // Tu consulta en SQL
            string query = "SELECT * FROM iwincjm.campeonato";

            // Prepara la conexión
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
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
                    campeonato = new Campeonato();
                    campeonato.Identificador = reader.GetInt32("identificador");
                    campeonato.NombreCampeonato = reader.GetString("nombre_campeonato");
                    campeonato.Tipo = reader.GetString("tipo");
                    campeonato.Categoria = reader.GetString("categoria");
                    // campeonato.ImagenCampeonato = reader.GetByte("imagen_campeonato");
                    campeonato.CantidadGrupos = reader.GetInt32("cantidad_grupos");
                    campeonato.FechaInicio = reader.GetDateTime("fecha_inicio");

                    campeonatoList.Add(campeonato);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            return campeonatoList;
        }


        public void agregarCampeonato(Campeonato campeonato)
        {
            
         
            string query = "Insert into campeonato(`nombre_campeonato`,`tipo`,`categoria`,`cantidad_grupos`,`fecha_inicio`) " +
                "values('" + campeonato.NombreCampeonato + "','" + campeonato.Tipo + "','" + campeonato.Categoria + "','" 
                + campeonato.CantidadGrupos + "','" + campeonato.FechaInicio.Year + "-" + campeonato.FechaInicio.Month + "-" 
                + campeonato.FechaInicio.Day + "') ";

        
           
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();


            databaseConnection.Close();


        }

        public void modificarCameponato(Campeonato campeonato)
        {


            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "UPDATE `iwincjm`.`campeonato` SET `nombre_campeonato` = '" + campeonato.NombreCampeonato + "'," +
               " `tipo` = '" + campeonato.Tipo + "', `categoria` = '" + campeonato.Categoria + "', " +
               "`fecha_inicio` = '" + campeonato.FechaInicio.Year + "-" + campeonato.FechaInicio.Month + "-" + campeonato.FechaInicio.Day + "' " +
               "WHERE `identificador` = " + campeonato.Identificador + "; ";



            // Prepara la conexión
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;


            // Abre la base de datos
            databaseConnection.Open();

            // Ejecuta la consultas
            reader = commandDatabase.ExecuteReader();

            // actualizooo


            // Cerrar la conexión
            databaseConnection.Close();

        }

        public void eliminarCampeonato(Int32 identificador)
        {

            Campeonato campeonato;

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "DELETE  FROM campeonato where identificador = '" + identificador + "'";

            Console.Write(query);

            // Prepara la conexión
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            // A consultar !

            // Abre la base de datos
            databaseConnection.Open();

            // Ejecuta la consultas
            reader = commandDatabase.ExecuteReader();

            // Hasta el momento todo bien, es decir datos obtenidos

            // IMPORTANTE :#
            // Si tu consulta retorna un resultado, usa el siguiente proceso para obtener datos



            // Cerrar la conexión
            databaseConnection.Close();


        }
    }
}
