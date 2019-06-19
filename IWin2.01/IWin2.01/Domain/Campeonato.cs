using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iwin1._2.Domain
{
    public class Campeonato
    {
        int identificador;
        String nombreCampeonato;
        String tipo;
        String categoria;
        Byte imagenCampeonato;
        int cantidadGrupos;
        DateTime fechaInicio;
        List<Equipo> equipos;
        List<Juego> juegos;


        public Campeonato()
        {

        }

        public Campeonato(int identificador, String nombreCampeonato, Byte imagenCampeonato, int cantidadGrupos, DateTime fechaInicio)
        {
            this.identificador = identificador;
            this.nombreCampeonato = nombreCampeonato;
            this.imagenCampeonato = imagenCampeonato;
            this.cantidadGrupos = cantidadGrupos;
            this.fechaInicio = fechaInicio;
        }

        public Campeonato(int identificador, String nombreCampeonato, String tipo, String categoria, Byte imagenCampeonato, int cantidadGrupos, DateTime fechaInicio)
        {

            this.identificador = identificador;
            this.nombreCampeonato = nombreCampeonato;
            this.tipo = tipo;
            this.categoria = categoria;
            this.imagenCampeonato = imagenCampeonato;
            this.cantidadGrupos = cantidadGrupos;
            this.fechaInicio = fechaInicio;
        }

        public Campeonato(int identificador, String nombreCampeonato, String tipo, String categoria, Byte imagenCampeonato, int cantidadGrupos, DateTime fechaInicio, List<Equipo> equipos, List<Juego> juegos)
        {
            this.equipos = equipos;
            this.juegos = juegos;
            this.identificador = identificador;
            this.nombreCampeonato = nombreCampeonato;
            this.tipo = tipo;
            this.categoria = categoria;
            this.imagenCampeonato = imagenCampeonato;
            this.cantidadGrupos = cantidadGrupos;
            this.fechaInicio = fechaInicio;
        }

        public int Identificador { get => identificador; set => identificador = value; }
        public String NombreCampeonato { get => nombreCampeonato; set => nombreCampeonato = value; }
        public String Tipo { get => tipo; set => tipo = value; }
        public String Categoria { get => categoria; set => categoria = value; }
        public Byte ImagenCampeonato { get => imagenCampeonato; set => imagenCampeonato = value; }
        public int CantidadGrupos { get => cantidadGrupos; set => cantidadGrupos = value; }
        public DateTime FechaInicio { get => fechaInicio; set => fechaInicio = value; }
        public List<Equipo> Equipos { get => equipos; set => equipos = value; }
        public List<Juego> Juegos { get => juegos; set => juegos = value; }
    }
}