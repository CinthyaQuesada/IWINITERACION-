using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Iwin1._2.Domain;
using Iwin1_2.Data;

namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class sancionController : ControllerBase
    {

        sancionData sancionData = new sancionData();
     

        // GET: api/sancion/5
        [HttpGet("{id}", Name = "Getfddfdg")]
        public IEnumerable<sancionColectiva> Get(int id)
        {
            return this.sancionData.GetAllSancionescolectivas(id);
        }
        // GET: api/sancion/5
        [HttpGet("campeonato/{id}", Name = "Getfvgfgddfdg")]
        public IEnumerable<sancionColectiva> Geta(int id)
        {
            return this.sancionData.GetAllSancionescolectivasByCampeonato(id);
        }

        // POST: api/sancion
        [HttpPost]
        public sancionColectiva Post([FromBody] sancionColectiva sancion)
        {

            sancionData.registrarSancionColectiva(sancion);
            return sancion;

        }

        // PUT: api/sancion/5
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
