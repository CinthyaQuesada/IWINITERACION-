using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Iwin1._2.Data;
using Iwin1._2.Domain;
using System.Windows.Forms;
//using System.Windows.Forms;

namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EquipoController : ControllerBase
    {
        EquipoData equipoData = new EquipoData();



        /*---------------Listar Equipo ADM-----------------------------*/
        [HttpGet]
        public IEnumerable<Equipo> Get()
        {
            // 
            return equipoData.d();
        }

        [HttpGet("lista/{nombre}", Name = "equiposR")]
        public Equipo Get(string nombre)
        {
            return equipoData.informacionEquipo(nombre);
        }

        [HttpGet("mod/{equipo}", Name = "EqMod")]
        public IEnumerable<Equipo> EqMod(string equipo)
        {

            return equipoData.infoEquipo(equipo);
        }
        /*---------------Listar Equipo REP-----------------------------
        [HttpGet("{nombre}", Name = "GetEquipo")]
        public Equipo GetEquipo(string nombre)
        {
            Console.WriteLine(nombre);
            return equipoData.informacionEquipo(nombre);
        }*/

        /*---------------Listar Equipo REP-----------------------------*/
        [HttpGet("{nombre}", Name = "EquipoRep")]
        public IEnumerable<Equipo> EquipoRep(string nombre)
        {
            EquipoData eData = new EquipoData();
            return eData.infoEquipo(nombre);
        }

        /*  
        [HttpGet("{identificadorJuego}", Name = "GetJuegoActualizar")]
        public IEnumerable<Juego> GetJuegoActualizar(int identificadorJuego)
        {
            JuegoData juegoData = new JuegoData();
            return juegoData.listarJuegoPorIdentificador(identificadorJuego);
        }*/



        /*-------------Insertar Equipo------------------------*/
        [HttpPost]
        public int Create([FromBody] Equipo equipo)
        {
            return equipoData.insertar(equipo);
        }



        /*-------------Modificar Equipo------------------------*/
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Equipo equipo)
        {
            equipoData.modificar(equipo, id);
        }



        /*-------------Eliminar Equipo------------------------*/
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            equipoData.eliminar(id);
        }


        [HttpPost("modificar/{equipo}", Name = "ModEquipo")]
        public Equipo modEquipo([FromBody] Equipo equipo)
        {
            equipoData.modificar(equipo, 1);
            return equipo;
        }


        [HttpGet("rep/{equipo}", Name = "EqModi")]
        public IEnumerable<Equipo> EqModi(string equipo)
        {

            return equipoData.infoRep(equipo);
        }

        // GET: api/Juego/5
        [HttpGet("equipos/{identificadorCampeonato}", Name = "GetEquipos")]
        public IEnumerable<Equipo> GetEquipos(int identificadorCampeonato)
        {
         
            return equipoData.informacionEquipoPorCampeonato(identificadorCampeonato);
        }


    }

}
