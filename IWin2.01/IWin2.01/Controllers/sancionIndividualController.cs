using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;
using Iwin1_2.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class sancionIndividualController : ControllerBase
    {
        sancionData sancionData = new sancionData();
        // GET: api/sancionIndividual
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/sancionIndividual/5
        [HttpGet("juego/{id}", Name = "Grrtrrrret")]
        public IEnumerable<sancionIndivisual> Get(int id)
        {
            return sancionData.GetAllSancionesIndividualesByJuego(id);
                }

        // GET: api/equipo/5
        [HttpGet("juegosAll/{id}", Name = "Grrrstghjrrret")]
        public IEnumerable<Juego> GetByCampeonatoAll(int id)
        {
            return sancionData.listarJuegosPorCampeonatoAll(id);
        }


        // GET: api/campeonato/5
        [HttpGet("campeonato/{id}", Name = "Grrrrrrert")]
        public IEnumerable<sancionIndivisual> GetByCampeonato(int id)
        {
            return sancionData.GetAllSancionesIndividualesByCampeonato(id);
        }


        // GET: api/equipo/5
        [HttpGet("equipo/{id}/{equipo}", Name = "Grrrsrrret")]
        public IEnumerable<sancionIndivisual> GetByEquipo(int id,int equipo)
        {
            return sancionData.GetAllSancionesIndividualesByEquipo(equipo, id);
        }

        // GET: api/equipo/5
        [HttpGet("juegos/{id}", Name = "Grrrsjrrret")]
        public IEnumerable<Juego> GetByCampeo(int id)
        {
            return sancionData.listarJuegosPorCampeonatoIndividual(id);
        }



        // POST: api/sancionIndividual
        [HttpPost]
        public sancionIndivisual Post([FromBody] sancionIndivisual sancion)
        {
            sancionData.registrarSancionIndividual(sancion);
            return sancion;


        }

        // PUT: api/sancionIndividual/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
