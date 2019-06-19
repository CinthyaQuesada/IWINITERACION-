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


        public List<Campeonato> listarCampeonatos()
        {

            Campeonato campeonato;
            List<Campeonato> campeonatoList = new List<Campeonato>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "SELECT * FROM Campeonato";

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

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
         
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
    }
}
