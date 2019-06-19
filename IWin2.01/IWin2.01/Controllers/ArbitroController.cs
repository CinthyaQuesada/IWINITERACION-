using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Iwin1._2.Data;
using Iwin1._2.Domain;


namespace Iwin1._2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArbitroController : ControllerBase
    {
        ArbitroData arbitroData = new ArbitroData();



        /*---------------Listar Arbitro ADM-----------------------------*/
        [HttpGet]
        public IEnumerable<Arbitro> Get()
        {
            // MessageBox.Show("DELETE");
            return arbitroData.d();
        }

        [HttpGet("lista/{nombre}", Name = "ArbitrosR")]
        public Arbitro ArbitrosR(string nombre)
        {
            return arbitroData.informacionArbitro(nombre);
        }


        /*---------------Listar Arbitro REP-----------------------------
        [HttpGet("{nombre}", Name = "GetArbitro")]
        public Arbitro GetArbitro(string nombre)
        {
            Console.WriteLine(nombre);
            return ArbitroData.informacionArbitro(nombre);
        }*/

        /*---------------Listar Arbitro REP-----------------------------*/
        [HttpGet("{nombre}", Name = "ArbitroRep")]
        public IEnumerable<Arbitro> ArbitroRep(string nombre)
        {
            ArbitroData eData = new ArbitroData();
            return eData.infoArbitro(nombre);
        }

        /*  
        [HttpGet("{identificadorJuego}", Name = "GetJuegoActualizar")]
        public IEnumerable<Juego> GetJuegoActualizar(int identificadorJuego)
        {
            JuegoData juegoData = new JuegoData();
            return juegoData.listarJuegoPorIdentificador(identificadorJuego);
        }*/



        /*-------------Insertar Arbitro------------------------*/
        [HttpPost]
        public int Insertar([FromBody] Arbitro arbitro)
        {
            //MessageBox.Show("CONTROLLER "+arbitro.Nombre);
            return arbitroData.insertar(arbitro);
        }







        /*-------------Eliminar Arbitro------------------------*/
        [HttpDelete("{id}", Name = "EliminarArbitro")]
        public void Delete(string id)
        {
            //MessageBox.Show("QQQQ");
            arbitroData.eliminar(id);
        }






    }

}
