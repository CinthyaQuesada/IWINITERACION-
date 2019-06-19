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
    public class LoginController : ControllerBase
    {
        LoginData loginData = new LoginData();
        private Login login;


        // GET: api/Login
        [HttpGet]
        public IEnumerable<Login> Get()
        {
            return loginData.usuarios();
        }

        // POST: api/Login
        [HttpPost]
        public int Create([FromBody] Login login)
        {
            return loginData.iniciar(login);
        }


    }
}