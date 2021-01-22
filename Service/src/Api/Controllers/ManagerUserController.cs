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
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ManagerUserController : BaseController
    {
        private readonly ILogger<ManagerUserController> _logger;
        public ManagerUserController(IContext context, ILogger<ManagerUserController> logger)
        : base(context)
        {
            _logger = logger;
        }
        [HttpGet]
        [Authorize]
        public UserInfo GetInfo()
        {
            return new UserInfo()
            {
                Id = this.User.GetId(),
                Claims = this.User.Claims.ToDictionary(claim => claim.Type, claim => claim.Value)
            };
        }

        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<UserToken>> Register([FromBody]UserPayLoad model)
        {
            // Recupera o usuário
            var user = UserRepository.Add(model.Username, model.Password);

            // Verifica se o usuário existe
            if (user == null)                
                return NotFound(new { message = "Usuário ou senha inválidos" });

            _context.Users.Add(user);
      
            //_context.UsuarioPermissoes.Add(usuarioPermissoes);
            await _context.SaveChangesAsync();
            
            // Gera o Token
            var token = await Task.FromResult(TokenService.GenerateToken(user));

            // Oculta a senha
            user.Password = "";
            
            // Retorna os dados
            return new UserToken
            {
                User = user,
                Token = token
            };
        }
    }
}
