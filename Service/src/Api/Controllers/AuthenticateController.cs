
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Domain;
using Domain.Interface;
using System.Threading.Tasks;
using Api.Model;
using Api.Services;
using Api.Repository;

namespace Api.Controllers
{
    [Route("api/v1/[controller]")]
    public class AuthenticationController : BaseController
    {

        private readonly ILogger<AuthenticationController> _logger;

        public AuthenticationController(IContext context, ILogger<AuthenticationController> logger)
        : base(context)
        {
            _logger = logger;
        }


        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<UserToken>> Authenticate([FromBody] UserPayLoad model)
        {
            var user = UserRepository.Get(model.Username, model.Password, _context.Users.ToList(), _context.UserRoles.ToList(), _context.Roles.ToList());

            if (user == null)
                return NotFound(new { message = "Usuário ou senha inválidos" });

            var token = await Task.FromResult(TokenService.GenerateToken(user));
            user.Password = "";
            return new UserToken
            {
                User = user,
                Token = token
            };
        }
    }
}
