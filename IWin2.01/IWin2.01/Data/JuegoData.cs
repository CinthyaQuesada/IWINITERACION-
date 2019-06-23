using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;
using System.Windows.Forms;

namespace Iwin1._2.Data
{
    public class JuegoData
    {
        //string connectionString = "Server=db4free.net; Database=iwincjmdb; Uid= laboratorios; Pwd=UCRSA.118;old guids=true;";
        public List<Juego> listarJuegos()
        {
            MessageBox.Show("entra en dta");
            Juego juego;
            Campeonato campeonato;
            Equipo equipoA;
            Equipo equipoB;
            List<Juego> juegoList = new List<Juego>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            /* string query = "SELECT j.identificador, c.nombre_campeonato as campeonato, ea.nombre_equipo as equipoA, eb.nombre_equipo as equipoB,j.fecha_juego," +
                 "j.estado_juego, j.lugar, a.nombre as arbitro FROM iwincjm.juego j JOIN iwincjm.equipo ea ON j.equipo_A = ea.identificador" +
                 "JOIN iwincjm.equipo eb ON j.equipo_B = eb.identificador JOIN iwincjm.campeonato c ON j.identificador_campeonato = c.identificador " +
                 "JOIN iwincjm.arbitro a ON j.arbitro_asignado = a.identificacion ";*/
            string query = "SELECT * FROM iwincjm.juego;";

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
                    juego = new Juego();
                    juego.Identificador = reader.GetInt32("identificador");
                    juego.EquipoA.NombreEquipo = reader.GetString("equipoA");
                    juego.EquipoB.NombreEquipo = reader.GetString("equipoB");
                    juego.FechaJuego = reader.GetDateTime("fecha_juego");
                    juego.EstadoJuego = reader.GetString("estado_juego");
                    juego.Lugar = reader.GetString("lugar");
                    juego.ArbitroAsignado.Nombre = reader.GetString("arbitro");
                    juegoList.Add(juego);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();




            return juegoList;
        }



        public List<Juego> listarJuegosPorCampeonato(Int32 identificadorCampeonato)
        {

            Juego juego;
            Campeonato campeonato;
            Equipo equipoA;
            Equipo equipoB;
            Arbitro arbitro;
            List<Juego> juegoList = new List<Juego>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "SELECT j.identificador, c.nombre_campeonato as campeonato, ea.nombre_equipo as equipoA, " +
                "eb.nombre_equipo as equipoB,j.fecha_juego, j.estado_juego, j.lugar, a.nombre as arbitro " +
                "FROM iwincjm.juego j JOIN iwincjm.equipo ea ON j.equipo_A = ea.identificador " +
                "JOIN iwincjm.equipo eb ON j.equipo_B = eb.identificador " +
                "JOIN iwincjm.campeonato c ON j.identificador_campeonato = c.identificador " +
                "JOIN iwincjm.arbitro a ON j.arbitro_asignado = a.identificacion " +
                "WHERE j.identificador_campeonato=" + identificadorCampeonato;


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
                    juego = new Juego();
                    equipoA = new Equipo();
                    equipoB = new Equipo();
                    arbitro = new Arbitro();
                    juego.Identificador = reader.GetInt32("identificador");
                    equipoA.NombreEquipo = reader.GetString("equipoA");
                    equipoB.NombreEquipo = reader.GetString("equipoB");
                    juego.EquipoA = equipoA;
                    juego.EquipoB = equipoB;
                    juego.FechaJuego = reader.GetDateTime("fecha_juego");
                    juego.EstadoJuego = reader.GetString("estado_juego");
                    juego.Lugar = reader.GetString("lugar");
                    arbitro.Nombre = reader.GetString("arbitro");
                    juego.ArbitroAsignado = arbitro;
                    juegoList.Add(juego);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            return juegoList;
        }



        public List<Juego> listarJuegoPorIdentificador(Int32 identificadorJuego)
        {
            Juego juego;
            Campeonato campeonato;
            Equipo equipoA;
            Equipo equipoB;
            Arbitro arbitro;
            List<Juego> juegoList = new List<Juego>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "SELECT j.identificador,j.estado_juego c.nombre_campeonato AS nombreCampeonato, ea.nombre_equipo AS equipoA, " +
                "eb.nombre_equipo AS equipoB, j.fecha_juego, j.lugar, j.arbitro_asignado FROM iwincjm.juego j " +
                "JOIN campeonato c on j.identificador_campeonato=c.identificador " +
                "JOIN equipo ea ON j.equipo_A = ea.identificador " +
                "JOIN equipo eb ON j.equipo_B = eb.identificador " +
                "WHERE j.identificador=" + identificadorJuego;

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
                    juego = new Juego();
                    equipoA = new Equipo();
                    equipoB = new Equipo();
                    arbitro = new Arbitro();
                    juego.Identificador = reader.GetInt32("identificador");
                    equipoA.NombreEquipo = reader.GetString("equipoA");
                    equipoB.NombreEquipo = reader.GetString("equipoB");
                    juego.EquipoA = equipoA;
                    juego.EquipoB = equipoB;
                    juego.FechaJuego = reader.GetDateTime("fecha_juego");
                    juego.EstadoJuego = reader.GetString("estado_juego");
                    juego.Lugar = reader.GetString("lugar");
                    arbitro.Nombre = reader.GetString("arbitro");
                    juego.ArbitroAsignado = arbitro;
                    juegoList.Add(juego);

                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            return juegoList;
        }



        public void actualizarJuego(Juego jueg)
        {

            Juego juego = new Juego();
            juego = jueg;

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            
            string query = "UPDATE `iwincjm`.`juego` SET `equipo_A` = " + jueg.EquipoA.Identificador + ", `equipo_B` = " + jueg.EquipoB.Identificador + "," +
                " `estado_juego` = '" + jueg.EstadoJuego + "', `lugar` = '" + jueg.Lugar + "'," +
                "`arbitro_asignado` = " + jueg.ArbitroAsignado.Identificacion + ", `fecha_juego` = '" + jueg.FechaJuego.Year + "-" + jueg.FechaJuego.Month + "-"
                + jueg.FechaJuego.Day + "' WHERE `identificador` = " + jueg.Identificador + " ; ";

            MessageBox.Show(query);

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


    }
}