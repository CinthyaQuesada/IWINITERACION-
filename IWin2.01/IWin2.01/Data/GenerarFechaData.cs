using Iwin1._2.Domain;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IWin2_01_Data
{
    public class GenerarFechaData
{
        string connectionString = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";


        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(connectionString);
        }

        public List<Equipo> listarEquipos(int id)
        {
            Equipo equipo;
            List<Equipo> equipoList = new List<Equipo>();
            string connectionString1 = "Server=163.178.107.130; Database=iwincjm; Uid= laboratorios; Pwd=UCRSA.118;";
            string query = "select e.* from equipo e join inscripcion ins on ins.identificador_equipo=e.identificador where ins.identificador_campeonato=" + id   ;

            MySqlConnection databaseConnection = new MySqlConnection(connectionString1);
            MySqlCommand commandDatabase = new MySqlCommand(query, databaseConnection);
            commandDatabase.CommandTimeout = 100;
            MySqlDataReader reader;

            
                databaseConnection.Open();
                reader = commandDatabase.ExecuteReader();


                // Si se encontraron datos
                if (reader.HasRows)
                {
                    while (reader.Read())
                    {
                        //                   ID                              First name                  Last Name                    Address
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
           
            
            return equipoList;
        }



    }
}
