using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Iwin1._2.Data;
using Iwin1._2.Domain;
namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResultadoController : ControllerBase
    {
        // GET: api/Resultado
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Resultado/5
        [HttpGet("{idJuego}/{idEquipo}", Name = "Getdsds")]
        public Resultado Get(int idJuego,int idEquipo)
        {
            ResultadoData resultadoData = new ResultadoData();

            return resultadoData.listarJuegosPorCampeonato(idJuego, idEquipo);


        }

     

        // GET: api/Resultado/5
        [HttpGet("equipo/{idEquipo}", Name = "Getsdsds")]
        public Equipo GetEquipo( int idEquipo)
        {
            ResultadoData resultadoData = new ResultadoData();

            return resultadoData.informacionEquipo( idEquipo);


        }

        // POST: api/Resultado
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Resultado/5
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
