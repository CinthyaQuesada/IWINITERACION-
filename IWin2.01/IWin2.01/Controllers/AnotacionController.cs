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
    public class AnotacionController : ControllerBase
    {
        // GET: api/Anotacion
        [HttpGet("campeonato/{id}", Name = "Getdrrrrr")]
        public IEnumerable<anotacion> Get(int id)
        {
            return data.GetAllAnotacionesByCampeonato(id);
        }


        // GET: api/Anotacion
        [HttpGet("juego/{id}", Name = "Getdrrrsssrr")]
        public IEnumerable<Juego> GetJuegos(int id)
        {
            return data.listarJuegosPorCampeonato(id);
        }



       

        // GET: api/Anotacion/5
        [HttpGet("{id}/{juego}", Name = "Getrrrrr")]
        public IEnumerable<anotacion> Get(int id,int juego)
        {
            return data.GetAllAnotaciones(id, juego);
        }
        AnotacionData data = new AnotacionData();
        // POST: api/Anotacion
        [HttpPost]
        public anotacion Post([FromBody] anotacion anotacion)
        {
           
            data.registrarAnotacion(anotacion);
            return anotacion;

        }

        // PUT: api/Anotacion/5
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
