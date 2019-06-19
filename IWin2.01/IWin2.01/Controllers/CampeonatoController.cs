using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Iwin1._2.Data;
using Iwin1._2.Domain;

namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CampeonatoController : ControllerBase
    {

        private readonly IConfiguration configuration;
        public CampeonatoController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        // GET: api/Campeonato
        [HttpGet]
        public IEnumerable<Campeonato> Get()
        {
            CampeonatoData campeonatoData = new CampeonatoData();
            System.Diagnostics.Debug.WriteLine("entra en controller");
            Console.WriteLine("Entraaaaa");
            return campeonatoData.listarCampeonatos();
        }


        // POST: api/campeonato
        [HttpPost]
        public Campeonato Post([FromBody] Campeonato campeonato)
        {
            CampeonatoData campeonatoData = new CampeonatoData();

            campeonatoData.agregarCampeonato(campeonato);
            return campeonato;
        }


    }
}
