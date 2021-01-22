
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Domain;
using Domain.Interface;
using NSwag.Annotations;

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
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]

        public ActionResult<List<Category>> Get()
        {

            var categories = _context.Categories.Where(x => !x.Excluded).ToList();
            var notFound = new NotFoundResult();

            return categories.Any() ? (ActionResult<List<Category>>)Ok(categories) : notFound;
        }



    }
}