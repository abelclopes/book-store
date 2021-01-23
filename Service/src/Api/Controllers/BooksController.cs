
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Domain;
using Domain.Interface;
using Api.Model;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace Api.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class BooksController : BaseController
    {

        private readonly ILogger<BooksController> _logger;

        public BooksController(IContext context, ILogger<BooksController> logger)
        : base(context)
        {
            _logger = logger;
        }

        [HttpGet]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]

        public async Task<ActionResult<BooksResponseModel>> GetAwaiter(PaginationParams model)
        {

            var books = await Task.FromResult( _context.Books.Where(x => !x.Excluded).ToList());
            var response = ShowMensageResponse.BuildResponse(books, model);
            if(!response.Success) {
                var notFound = new NotFoundResult();
                return notFound;
            }

            return Ok(response);
        }



    }
}