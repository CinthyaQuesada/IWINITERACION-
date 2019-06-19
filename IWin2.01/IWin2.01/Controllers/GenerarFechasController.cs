using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Iwin1._2.Domain;
using IWin2_01_Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IWin2._01.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerarFechasController : ControllerBase
    {
    
        GenerarFechaData data = new GenerarFechaData();
        // GET: api/GenerarFechas/5
        [HttpGet("{id}", Name = "Gewrt")]
        public IEnumerable<Equipo> Get(int id)
        {
         
            return data.listarEquipos(id);
        }

        // POST: api/GenerarFechas
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/GenerarFechas/5
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
