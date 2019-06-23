using Iwin1._2.Domain;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Data
{
    public class InscripcionData

    {
        public void realizarInscripcion(Inscripcion inscripcion)
        {
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "Insert into Inscripcion(identificador_campeonato,identificador_equipo,fecha_inscripcion) values('" + inscripcion.Campeonato.Identificador + "','" + inscripcion.Equipo.Identificador + "','" + inscripcion.FechaInscripcion.Year + "-" + inscripcion.FechaInscripcion.Month + "-" + inscripcion.FechaInscripcion.Day + "') ";


            MySqlConnection databaseConnection = new MySqlConnection(connectionString);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 60;
            MySqlDataReader reader;

            databaseConnection.Open();
            reader = commandDatabase.ExecuteReader();

            databaseConnection.Close();

        }


        public List<Campeonato> campeonatosInscripcion(string nombreE)
        {

            Campeonato campeonato;
            List<Campeonato> campeonatoList = new List<Campeonato>();
            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "SELECT * FROM `campeonato` WHERE cantidad_grupos=0";

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
                    //campeonato.Tipo = reader.GetString("tipo");
                    //campeonato.Categria = reader.GetString("categoria");
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

        public List<Equipo> infoEquipo(string nombre)
        {

            Equipo equipo = new Equipo();
            List<Equipo> equipoList = new List<Equipo>();

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
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

                    equipoList.Add(equipo);

                }
            }
            else
            {
                Console.WriteLine("No se encontraron datos.");
            }

            databaseConnection.Close();
            Console.Write("AAAAAAAAAA");
            return equipoList;
        }



        public List<Inscripcion> infoInscripcion(string identificadorE)
        {
            Inscripcion inscripcion = null;
            List<Inscripcion> lista = new List<Inscripcion>();
            Campeonato c = new Campeonato();
            Equipo e = new Equipo();
            string query = "SELECT i.identificador, i.identificador_equipo as idE,i.identificador_campeonato as idC FROM inscripcion i  JOIN Equipo e ON i.identificador_equipo=e.identificador WHERE nombre_equipo='" + identificadorE + "'";
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
                    c.Identificador = reader.GetInt32("idC");
                    e.Identificador = reader.GetInt32("idE");
                    inscripcion = new Inscripcion();
                    inscripcion.Identificador = reader.GetInt32("identificador");
                    inscripcion.Campeonato = c;
                    inscripcion.Equipo = e;
                    lista.Add(inscripcion);

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }



            databaseConnection.Close();
            return lista;
        }

        public List<Inscripcion> inscripciones()
        {
            Inscripcion inscripcion = null;
            List<Inscripcion> lista = new List<Inscripcion>();
            Campeonato c = new Campeonato();
            Equipo e = new Equipo();
            string query = "SELECT i.identificador as id,fecha_inscripcion as f, e.nombre_equipo as eq, c.nombre_campeonato as ca FROM Inscripcion i JOIN Equipo e ON i.identificador_equipo=e.identificador JOIN Campeonato c ON i.identificador_campeonato = c.identificador; ";
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
                    c.NombreCampeonato = reader.GetString("ca");
                    e.NombreEquipo = reader.GetString("eq");
                    inscripcion = new Inscripcion();
                    inscripcion.Identificador = reader.GetInt32("id");
                    inscripcion.Campeonato = c;
                    inscripcion.Equipo = e;
                    inscripcion.FechaInscripcion = reader.GetDateTime("f");
                    lista.Add(inscripcion);

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }



            databaseConnection.Close();
            return lista;
        }

        public List<Inscripcion> inscripcionPorCamp(int idC)
        {
            Inscripcion inscripcion = null;
            List<Inscripcion> lista = new List<Inscripcion>();
            Campeonato c = new Campeonato();
            Equipo e = new Equipo();
            string query = "SELECT i.identificador, i.identificador_equipo as idE,i.identificador_campeonato as idC FROM inscripcion i  JOIN Equipo e ON i.identificador_equipo=e.identificador WHERE i.identificador_campeonato='" + idC + "' AND i.estado='espera'";
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
                    c.Identificador = reader.GetInt32("idC");
                    e.Identificador = reader.GetInt32("idE");
                    inscripcion = new Inscripcion();
                    inscripcion.Identificador = reader.GetInt32("identificador");
                    inscripcion.Campeonato = c;
                    inscripcion.Equipo = e;
                    lista.Add(inscripcion);

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }



            databaseConnection.Close();
            return lista;
        }


        public List<Inscripcion> inscripcionesC(int idC)
        {
            Inscripcion inscripcion = null;
            List<Inscripcion> lista = new List<Inscripcion>();
            Campeonato c = new Campeonato();
            Equipo e = new Equipo();
            string query = "SELECT i.identificador as id,fecha_inscripcion as f, e.nombre_equipo as eq, c.nombre_campeonato as ca FROM Inscripcion i JOIN Equipo e ON i.identificador_equipo=e.identificador JOIN Campeonato c ON i.identificador_campeonato = c.identificador WHERE i.identificador_campeonato='"+idC+"' AND i.estado='espera';";
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
                    c.NombreCampeonato = reader.GetString("ca");
                    e.NombreEquipo = reader.GetString("eq");
                    inscripcion = new Inscripcion();
                    inscripcion.Identificador = reader.GetInt32("id");
                    inscripcion.Campeonato = c;
                    inscripcion.Equipo = e;
                    inscripcion.FechaInscripcion = reader.GetDateTime("f");
                    lista.Add(inscripcion);

                }
            }
            else
            {
                Console.WriteLine("No se encontro nada");
            }



            databaseConnection.Close();
            return lista;
        }

        public void modificar(Inscripcion insc, int id)
        {

            string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "UPDATE inscripcion  SET estado='aprobado' WHERE identificador='" + id + "';";

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

