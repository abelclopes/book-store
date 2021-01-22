using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Identity.Core;
using Microsoft.AspNetCore.Authorization;

using Api.Repository;
using Api.Services;

using Domain;
using Domain.Helpers;
using Domain.Interface;

using Api.Model;

namespace Api.Controllers
{
    [Route("api/v1/[controller]")]
    public class HomeController : BaseController
    {
        private readonly ILogger<HomeController> _logger;
        public HomeController(IContext context, ILogger<HomeController> logger)
        : base(context)
        {
            _logger = logger;
        }
        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<dynamic>> Authenticate([FromBody] UserPayLoad model)
        {
            var users = _context.Users;
            var user = UserRepository.Get(model.Username, model.Password,users);

            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            var token = await Task.FromResult(TokenService.GenerateToken(user));
            user.Password = "";
            return new
            {
                user = user,
                token = token
            };
        }

        [HttpGet]
        [Route("anonymous")]
        [AllowAnonymous]
        public string Anonymous() => "Anônimo";

        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticated() => String.Format("Autenticado - {0}", User.Identity.Name);

        [HttpGet]
        [Route("employee")]
        [Authorize(Roles = "employee,manager")]
        public string Employee() => "Funcionário";

        [HttpGet]
        [Route("manager")]
        [Authorize(Roles = "manager")]
        public string Manager() => "Gerente";

    }
}