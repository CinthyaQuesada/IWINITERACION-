using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Data;
using Iwin1._2.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TablaPosicionesController : ControllerBase
    {
        TablaPosicionesData tablaData = new TablaPosicionesData();
        private TablaPosiciones tablaPosiciones;


        // GET: api/TablaPosiciones
        [HttpGet("generar/{idC}", Name = "GenerarTabla")]
        public IEnumerable<TablaPosiciones> GenerarTabla(int idC)
        {
            return tablaData.generarTabla(idC);
        }

        // GET: api/Campeonato
        [HttpGet]
        public IEnumerable<Campeonato> campoenatosTabla ()
        {
            return tablaData.campeonatosTabla();
        }

        [HttpGet("equipo/{idE}", Name = "GenerarTablaE")]
        public Campeonato GenerarTablaEquipo(int idE)
        {
            return tablaData.campeonatoPorEquipo(idE);
        }

        [HttpGet("buscar/{nombre}", Name = "EquipoA")]
        public Equipo EquipoA(String nombre)
        {
            return tablaData.buscarEquipo(nombre);
        }

        [HttpGet("logineq/{id}", Name = "loginEq")]
        public Equipo loginEq(int id)
        {
            return tablaData.buscarEquipoLog(id);
        }

        [HttpGet("camp/{id}", Name = "campoenatoEquipo")]
        public IEnumerable<Campeonato> campoenatoEquipo(int id)
        {
            return tablaData.campeonatosE(id);
        }

    }
}