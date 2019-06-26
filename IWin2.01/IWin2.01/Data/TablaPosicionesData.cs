using Iwin1._2.Domain;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Data
{
    public class TablaPosicionesData
    {

        public List<Resultado> resultados(int idCamp)
        {

            Resultado resultado;
            Juego juego = new Juego();
            Equipo equipo = new Equipo();
            List<Resultado> resultadoList = new List<Resultado>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

            string query = "SELECT r.id, r.idJuego,r.idEquipo, r.anotaciones, e.nombre_equipo nombreEquipo FROM resultado r JOIN equipo e ON r.idEquipo=e.identificador JOIN juego j ON r.idJuego=j.identificador JOIN campeonato c ON j.identificador_campeonato=c.identificador WHERE j.identificador_campeonato =" + "'" + idCamp + "'";


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
                    juego.Identificador = reader.GetInt32("idJuego");

                    equipo.Identificador = reader.GetInt32("idEquipo");
                    equipo.NombreEquipo = reader.GetString("nombreEquipo");
                    resultado = new Resultado();
                    resultado.Id = reader.GetInt32("id");
                    resultado.Juego = juego;
                    resultado.Equipo = equipo;
                    resultado.Anotaciones = reader.GetInt32("anotaciones");
                    resultadoList.Add(resultado);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }

            // Cerrar la conexión
            databaseConnection.Close();


            return resultadoList;
        }

        public Boolean  resultadosPorJuego(int idCamp, int idJuego)
        {
            Boolean encontrado = false;
            ResultadoFinal resultadoF;
            Juego juego = new Juego();
            Equipo equipo = new Equipo();
            Campeonato campeonato = new Campeonato();
            List<ResultadoFinal> resultadoList = new List<ResultadoFinal>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

            string query = "SELECT * FROM resultadosjuego WHERE id_campeonato=" + "'" + idCamp + "' AND id_juego='"+idJuego+"'";


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
                    juego.Identificador = reader.GetInt32("id_juego");
                    equipo.Identificador = reader.GetInt32("id_equipo");
                    campeonato.Identificador = reader.GetInt32("id_campeonato");
                   
                    resultadoF = new ResultadoFinal();
                    resultadoF.Id = reader.GetInt32("id");
                    resultadoF.Juego = juego;
                    resultadoF.Equipo = equipo;
                    resultadoF.Campeonato = campeonato;
                    resultadoF.GolesFavor = reader.GetInt32("goles_fav");
                    resultadoF.golesContra = reader.GetInt32("goles_enc");
                    resultadoF.Puntos = reader.GetInt32("puntos");
                    resultadoList.Add(resultadoF);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }
            
            // Cerrar la conexión
            databaseConnection.Close();

            if (resultadoList.Count==0)
            {
                encontrado = false;
            }
            else{
                encontrado = true;
            }
            return encontrado;
        }

        public void insertar(ResultadoFinal res)
        {

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

            string query = "Insert into resultadosjuego(`id_campeonato`,`id_juego`,`id_equipo`,`goles_fav`,`goles_enc`,`puntos`) " +
                "values('" + res.Campeonato.Identificador + "','" + res.Juego.Identificador + "','" + res.Equipo.Identificador + "','"
                + res.GolesFavor + "','" + res.golesContra + "','" + res.Puntos + "')";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();


            databaseConnection.Close();


        }

        public List<TablaPosiciones> generarTabla(int idCamp)
        {
            int puntosEqA = 0;
            int golesFA = 0;
            int golesCA = 0;
       
            int puntosEqB = 0;
            int golesFB = 0;
            int golesCB = 0;
    
            List<TablaPosiciones> resultadoList = new List<TablaPosiciones>();
            List<Resultado> resultado = resultados(idCamp);
            
            Resultado r = new Resultado();
            Resultado r2 = new Resultado();
            Equipo equipo = new Equipo();
            Campeonato campeonato = new Campeonato();
            Juego juego = new Juego();

            Equipo equipoB = new Equipo();
            

            for (int i = 0; i < resultado.Count; i++)
            {
                r = resultado.ElementAt(i);
                for (int j = 1; j < resultado.Count; j++)
                {
                    r2 = resultado.ElementAt(j);
                    if (r.Juego.Identificador == r2.Juego.Identificador)
                    {
                        if (!resultadosPorJuego(idCamp, r.Juego.Identificador))
                        {

                            if (r.Anotaciones > r2.Anotaciones)
                            {
                                puntosEqA += 3;
                            }
                            else if (r.Anotaciones < r2.Anotaciones)
                            {
                                puntosEqB += 3;

                            }
                            else
                            {
                                puntosEqA += 1;
                                puntosEqB += 1;
                            }
                            golesFA += r.Anotaciones;
                            golesCA += r2.Anotaciones;
                            golesFB += r2.Anotaciones;
                            golesCB += r.Anotaciones;

                            campeonato.Identificador = idCamp;
                            juego.Identificador = r.Juego.Identificador;

                            equipo.Identificador = r.Equipo.Identificador;
                            equipoB.Identificador = r2.Equipo.Identificador;
                            
                            insertar(new ResultadoFinal(1,juego,equipo,campeonato,golesFA,golesCA,puntosEqA));
                            insertar(new ResultadoFinal(2, juego, equipoB, campeonato, golesFB, golesCB, puntosEqB));
                        }
                    }  
                }
                puntosEqA = 0;
                golesFA = 0;
                golesCA = 0;

                puntosEqB = 0;
                golesFB = 0;
                golesCB = 0;
            }
            resultadoList = prueba(idCamp);
              return resultadoList;   
        }

        

        public List<Campeonato> campeonatosTabla()
        {
            Campeonato campeonato;
            List<Campeonato> campeonatoList = new List<Campeonato>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "SELECT * FROM Campeonato";
        
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    campeonato = new Campeonato();
                    campeonato.Identificador = reader.GetInt32("identificador");
                    campeonato.NombreCampeonato = reader.GetString("nombre_campeonato");
                    campeonato.CantidadGrupos = reader.GetInt32("cantidad_grupos");
                    campeonato.FechaInicio = reader.GetDateTime("fecha_inicio");

                    campeonatoList.Add(campeonato);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }
            databaseConnection.Close();
            return campeonatoList;
        }

        public List<Campeonato> campeonatosE(int id)
        {
            Campeonato campeonato;
            List<Campeonato> campeonatoList = new List<Campeonato>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "SELECT c.identificador, nombre_campeonato, cantidad_grupos, fecha_inicio FROM Campeonato c JOIN inscripcion i ON C.identificador=I.identificador_campeonato WHERE i.identificador_equipo='" + id+"'";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    campeonato = new Campeonato();
                    campeonato.Identificador = reader.GetInt32("identificador");
                    campeonato.NombreCampeonato = reader.GetString("nombre_campeonato");
                    campeonato.CantidadGrupos = reader.GetInt32("cantidad_grupos");
                    campeonato.FechaInicio = reader.GetDateTime("fecha_inicio");

                    campeonatoList.Add(campeonato);
                }
            }
            else
            {

                Console.WriteLine("No se encontraron datos.");
            }
            databaseConnection.Close();
            return campeonatoList;
        }

        public Campeonato campeonatoPorEquipo(int idEquipo)
        {
            Campeonato campeonato = new Campeonato();
            List<Campeonato> campeonatoList = new List<Campeonato>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            
            string query = "SELECT c.identificador, c.nombre_campeonato FROM Equipo e JOIN Inscripcion i ON e.identificador=i.identificador_equipo JOIN Campeonato c ON i.identificador_campeonato=c.identificador WHERE i.identificador_equipo=" + "'" + idEquipo + "'";
           
            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {
                    campeonato = new Campeonato();
                    campeonato.Identificador = reader.GetInt32("identificador");
                    campeonato.NombreCampeonato = reader.GetString("nombre_campeonato");
                    //campeonato.CantidadGrupos = reader.GetInt32("cantidad_grupos");
                    //campeonato.FechaInicio = reader.GetDateTime("fecha_inicio");
                    
                    campeonatoList.Add(campeonato);
                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }
            databaseConnection.Close();
            return campeonato;
        }


        public List<TablaPosiciones> prueba(int idCampeonato)
        {
            TablaPosiciones tabla = new TablaPosiciones();
            List<TablaPosiciones> tablaPosiciones = new List<TablaPosiciones>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";

            string query = "SELECT c.nombre_campeonato, e.nombre_equipo, e.identificador as idE, count(r.id_equipo) as pj, sum(r.goles_fav) as gf, sum(r.goles_enc) as gc, sum(r.goles_fav)- sum(r.goles_enc) as gd,sum(r.puntos) as puntos, count(if(r.puntos=3,1,NULL)) as pg,count(if(r.puntos=1,1,NULL)) as pe,count(if(r.puntos=0,1,NULL)) as pp FROM equipo e JOIN resultadosjuego r ON e.identificador=r.id_equipo JOIN juego j ON j.identificador = r.id_juego JOIN campeonato c ON j.identificador_campeonato = c.identificador WHERE r.id_campeonato='"+ idCampeonato + "' GROUP BY nombre_equipo";

            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();

            reader = commandDatabase.ExecuteReader();

            if (reader.HasRows)
            {
                while (reader.Read())
                {

                    tabla = new TablaPosiciones();
                    tabla.Equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    tabla.Campeonato.Identificador = idCampeonato;
                    tabla.Campeonato.NombreCampeonato= reader.GetString("nombre_campeonato");
                    tabla.Equipo.Identificador = reader.GetInt32("idE");
                    tabla.PartidosJugados= reader.GetInt32("pj");
                    tabla.GolesFavor = reader.GetInt32("gf");
                    tabla.GolesContra = reader.GetInt32("gc");
                    tabla.GolDif = reader.GetInt32("gd");
                    tabla.CantidadPuntos = reader.GetInt32("puntos");
                    tabla.PartidosGanados = reader.GetInt32("pg");
                    tabla.PartidosEmpatados = reader.GetInt32("pe");
                    tabla.PartidosPerdidos = reader.GetInt32("pp");
                    tablaPosiciones.Add(tabla);
                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }
            databaseConnection.Close();
            return tablaPosiciones;
        }


        public Equipo buscarEquipo(string id)
        {
            Equipo Equipo = null;

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "SELECT identificador, nombre_equipo, nombre_representante,categoria,rama,logo, cancha_sede,telefono_representante,contrasenia_equipo FROM Equipo WHERE nombre_equipo='" + id + "'";

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
                    Equipo = new Equipo();
                    Equipo.Identificador = reader.GetInt32("identificador");
                    Equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    Equipo.Categoria = reader.GetString("categoria");
                    Equipo.Rama = reader.GetString("rama");
                    Equipo.CanchaSede = reader.GetString("cancha_sede");
                    Equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    Equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");
                    Equipo.NombreRepresentante = reader.GetString("nombre_representante");

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }

            databaseConnection.Close();


            return Equipo;
        }


        public Equipo buscarEquipoLog(int id)
        {
            Equipo Equipo = null;

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "SELECT identificador, nombre_equipo, nombre_representante,categoria,rama,logo, cancha_sede,telefono_representante,contrasenia_equipo FROM Equipo WHERE identificador='" + id + "'";

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
                    Equipo = new Equipo();
                    Equipo.Identificador = reader.GetInt32("identificador");
                    Equipo.NombreEquipo = reader.GetString("nombre_equipo");
                    Equipo.Categoria = reader.GetString("categoria");
                    Equipo.Rama = reader.GetString("rama");
                    Equipo.CanchaSede = reader.GetString("cancha_sede");
                    Equipo.TelefonoRepresentante = reader.GetString("telefono_representante");
                    Equipo.ContraseniaEquipo = reader.GetString("contrasenia_equipo");
                    Equipo.NombreRepresentante = reader.GetString("nombre_representante");

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }

            databaseConnection.Close();


            return Equipo;
        }




    }
}