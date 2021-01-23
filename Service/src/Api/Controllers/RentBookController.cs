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
using System;


namespace Api.Controllers
{

    [Route("api/v1/[controller]")]
    public class RentBookController : BaseController
    {
        private readonly ILogger<RentBookController> _logger;
        public RentBookController(IContext context, ILogger<RentBookController> logger) : base(context)
        {
            _logger = logger;
        }
        
        [HttpGet("Rented/{Rented}")]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponseModel>> Get(Boolean Rented, [FromQuery]PaginationParams model)
        {
            var books = await Task.FromResult( _context.Books.Where(x => !x.Excluded && !x.Rented).ToList());
            var response = ShowMensageResponse.BuildResponse(books, model);
            if(!response.Success) {
                var notFound = new NotFoundResult();
                return notFound;
            }

            return Ok(response);
        }

    }
}