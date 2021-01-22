using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Identity.Core;
using Microsoft.AspNetCore.Authorization;

using Swashbuckle.AspNetCore.SwaggerGen;
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
        [Authorize]
        [SwaggerResponse(typeof(List<Category>),201)]
        [SwaggerResponse(401)]
        [SwaggerResponse(403)]

        public ActionResult<List<Category>> get()
        {
            return  _context.Categories.Where(x => !x.Excluded).ToList();

        }
        


    }
}