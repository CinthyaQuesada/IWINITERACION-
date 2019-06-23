using Iwin1._2.Domain;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1_2.Data
{
    public class AnotacionData
    {



        string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

        public AnotacionData()
        {
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(connectionString);
        }


        public List<anotacion> GetAllAnotaciones(int idEquipo,int idJuego)
        {
            anotacion anotacion;
            List<anotacion> anotacionList = new List<anotacion>();
            using (MySqlConnection sqlCon = GetConnection())
            {

                sqlCon.Open();
                String query = "select * ,sum(cantidad_goles) as cantidad from anotaciones where  identificador_juego= " + idJuego + " group by identificador_jugador order By cantidad desc ";

                MySqlCommand sqlSelect = new MySqlCommand(query, sqlCon);

                using (MySqlDataReader reader = sqlSelect.ExecuteReader())
                {


                    while (reader.Read())
                    {
                        anotacion = new anotacion();
                        anotacion.Identificador = reader.GetInt16("identificador");
                        anotacion.CantidadGoles = reader.GetInt32("cantidad");
                        anotacion.Juego = reader.GetInt32("identificador_juego");
                        anotacion.Jugador = getJugador(reader.GetString("identificador_jugador"));
                        anotacion.Equipo = informacionEquipo(reader.GetInt32("identificador_equipo"));

                        anotacionList.Add(anotacion);
                    }
                    sqlCon.Close();

                }
            }
            return anotacionList;





        }


        public List<anotacion> GetAllAnotacionesByCampeonato(int id)
        {
            anotacion anotacion;
            List<anotacion> anotacionList = new List<anotacion>();
            using (MySqlConnection sqlCon = GetConnection())
            {

                sqlCon.Open();
                String query = "select * ,sum(cantidad_goles) as cantidad from anotaciones join Juego j on j.identificador=identificador_juego join campeonato c on c.identificador=j.identificador_campeonato  where c.identificador = " + id + "  group by identificador_jugador order By cantidad desc ";

                MySqlCommand sqlSelect = new MySqlCommand(query, sqlCon);

                using (MySqlDataReader reader = sqlSelect.ExecuteReader())
                {


                    while (reader.Read())
                    {
                        anotacion = new anotacion();
                        anotacion.Identificador = reader.GetInt16("identificador");
                        anotacion.CantidadGoles = reader.GetInt32("cantidad");
                        anotacion.Juego = reader.GetInt32("identificador_juego");
                        anotacion.Jugador = getJugador(reader.GetString("identificador_jugador"));
                        anotacion.Equipo = informacionEquipo(reader.GetInt32("identificador_equipo"));

                        anotacionList.Add(anotacion);
                    }
                    sqlCon.Close();

                }
            }
            return anotacionList;





        }






        public List<anotacion> GetAllSancionesIndividuales(int idEquipo, int idJugador)
        {
            anotacion anotacion;
            List<anotacion> anotacionList = new List<anotacion>();
            using (MySqlConnection sqlCon = GetConnection())
            {
                String query;
                sqlCon.Open();
                if (idJugador == -1)
                {
                    query = "select * from anotacion where identificadorEquipo = " + idEquipo;



                }
                else
                {
                    query = "select * from anotacion where identificadorEquipo = " + idEquipo + " and identificador_jugador = '" + idJugador + "'";
                }

                MySqlCommand sqlSelect = new MySqlCommand(query, sqlCon);

                using (MySqlDataReader reader = sqlSelect.ExecuteReader())
                {


                    while (reader.Read())
                    {
                        anotacion = new anotacion();
                        anotacion.Identificador = reader.GetInt16("identificador");
                        anotacion.CantidadGoles = reader.GetInt32("cantidad_goles");
                        anotacion.Juego = reader.GetInt32("identificador_juego");
                        anotacion.Jugador = getJugador(reader.GetString("identificador_jugador"));
                        anotacion.Equipo = informacionEquipo(reader.GetInt32("identificador_equipo"));

                        anotacionList.Add(anotacion);
                    }
                    sqlCon.Close();
                

                }
            }
            return anotacionList;





        }
        public void ValidaRegistro( int idJuego)
        {
            int individuales=0;
            int colectivas = 0;
            int totalColectivas = 0;
            int totalIndividuales = 0;
            using (MySqlConnection sqlCon = GetConnection())
            {
                String query;
                sqlCon.Open();
          
                    query = "select col.cantidad as colectivas ,indivi.cantidad as individuales, sum(r.sancionesIndividuales) as totalIndividuales , sum(r.sancionesColectivas) as totalColectivas from resultado r ,(select COUNT(identificador)as cantidad from sancionindividual WHERE identificador_juego="+idJuego+") as indivi,(select COUNT(identificador) as cantidad from sancioncolectiva WHERE identificador_juego="+idJuego+") as col where r.idJuego ="+idJuego;



                MySqlCommand sqlSelect = new MySqlCommand(query, sqlCon);

                using (MySqlDataReader reader = sqlSelect.ExecuteReader())
                {


                    while (reader.Read())
                    {
                       
                        individuales = reader.GetInt16("individuales");
                        colectivas = reader.GetInt16("colectivas");
                        totalColectivas = reader.GetInt16("totalColectivas");

                        totalIndividuales = reader.GetInt16("totalIndividuales");
                       
                    }
                    sqlCon.Close();


                }
            }

            if (individuales == totalIndividuales && colectivas == totalColectivas) {
                actualizarJuego(idJuego);
                
            }
           
           





        }


        public void actualizarJuego(int idJuego)
        {




            // Tu consulta en SQL
            string query = "Update juego set estado_juego='registrado'  where identificador = '" + idJuego + "'";

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
            string query = "SELECT j.identificador, c.nombre_campeonato as campeonato, eb.identificador as idB,ea.identificador as idA,ea.nombre_equipo as equipoA, " +
                "eb.nombre_equipo as equipoB,j.fecha_juego, j.estado_juego, j.lugar, a.nombre as arbitro " +
                "FROM iwincjm.juego j JOIN iwincjm.equipo ea ON j.equipo_A = ea.identificador " +
                "JOIN iwincjm.equipo eb ON j.equipo_B = eb.identificador " +
                "JOIN iwincjm.campeonato c ON j.identificador_campeonato = c.identificador " +
                "JOIN iwincjm.arbitro a ON j.arbitro_asignado = a.identificacion " +
                "WHERE j.identificador_campeonato=" + identificadorCampeonato+ " and j.estado_juego='finalizado' and j.identificador not in (Select  identificador_juego from sancionIndividual ) ";


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
                    equipoA.Identificador = reader.GetInt32("idA");
                    equipoB.Identificador = reader.GetInt32("idB");
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





        public Equipo informacionEquipo(int id)
        {

            Equipo equipo = new Equipo();

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select * from equipo where identificador=" + id + "";

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



        





        public void registrarAnotacion(anotacion anotacion)
        {



            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "Insert into anotaciones values( null , null," + anotacion.Equipo.Identificador + ",'" + anotacion.Jugador.Identificacion + "'," + anotacion.Juego+  "," + anotacion.CantidadGoles + " ) ";


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
            ValidaRegistro(anotacion.Juego);

        }






        public Jugador getJugador(string identificacion)
        {

            Jugador jugador;
            List<Jugador> jugadorList = new List<Jugador>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            // Tu consulta en SQL
            string query = "SELECT * FROM Jugador where identificacion = '" + identificacion + "'";
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

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    jugador = new Jugador();
                    jugador.Identificacion = reader.GetString("identificacion");
                    jugador.Nombre = reader.GetString("nombre");
                    jugador.Apellidos = reader.GetString("apellidos");
                    jugador.FechaNacimiento = reader.GetDateTime("fecha_nacimiento");
                    jugador.IdEquipo = reader.GetInt32("identificador_equipo");

                    jugadorList.Add(jugador);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            if (jugadorList.Count() > 0) { return jugadorList[0]; }



            return new Jugador();
        }




    }






}
