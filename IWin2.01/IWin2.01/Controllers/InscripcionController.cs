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
    public class InscripcionController : ControllerBase
    {
        InscripcionData insData = new InscripcionData();

        [HttpGet]
        public IEnumerable<Inscripcion> Get()
        {
            // MessageBox.Show("DELETE");
            return insData.inscripciones();
        }

        /*---------------Listar -----------------------------*/

        [HttpGet("{nombre}", Name = "InsCampeonatos")]
        public IEnumerable<Campeonato> InsCampeonatos(string nombre)
        {

            return insData.campeonatosInscripcion(nombre);
        }


        [HttpGet("camp/{equipo}", Name = "EqCampeonato")]
        public IEnumerable<Equipo> EqCampeonato(string equipo)
        {

            return insData.infoEquipo(equipo);
        }


        [HttpGet("comprobar/{id}", Name = "inscripcionsEq")]
        public IEnumerable<Inscripcion> inscripcionsEq(string id)
        {

            return insData.infoInscripcion(id);
        }


        // POST: api/Inscripcion
        /*-------------Inscripción------------------------*/
        [HttpPost]
        public void Insertar([FromBody] Inscripcion inscripcion)
        {
            insData.realizarInscripcion(inscripcion);
        }

        [HttpGet("campid/{id}", Name = "InscCa")]
        public IEnumerable<Inscripcion> InscCa(int id)
        {
            // MessageBox.Show("DELETE");
            return insData.inscripcionesC(id);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Inscripcion insc)
        {
            insData.modificar(insc, id);
        }
    }
}
