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
    public class CategoryController : BaseController
    {

        private readonly ILogger<CategoryController> _logger;
        public CategoryController(IContext context, ILogger<CategoryController> logger)
        : base(context)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<List<Category>> get()
        {
            return  _context.Categories.Where(x => !x.Excluded).ToList();

        }
        // [HttpPost]
        // [Route("create")]
        // public async Task<ActionResult<UserToken>> create([FromBody] string model)
        // {
        //     // Recupera o usuário
        //     var user = UserRepository.Add(model.Username, model.Password);

        //     // Verifica se o usuário existe
        //     if (user == null)
        //         return NotFound(new { message = "Usuário ou senha inválidos" });

        //     _context.Users.Add(user);

        //     //_context.UsuarioPermissoes.Add(usuarioPermissoes);
        //     await _context.SaveChangesAsync();

        // }


    }
}