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
        
        [HttpGet]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponseModel>> Get([FromQuery]bool flag, PaginationParams model)
        {
            var books = await Task.FromResult( _context.Books.Where(x => !x.Excluded).ToList());
            if(flag)
            {
                books = books.Where(x => x.Rented).ToList();
            }else
            {
                books = books.Where(x => !x.Rented).ToList();
            }
            var response = ShowMensageResponse.BuildResponse(books, model);
            if(!response.Success) {
                var notFound = new NotFoundResult();
                return notFound;
            }

            return Ok(response);
        }

        [HttpPost]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponseBoolModel>> Post([FromBody] RentBookModel model)
        {
            var response = new BooksResponseBoolModel();
             var Book = await Task.FromResult( _context.Books.FirstOrDefault(x => x.Id == model.BookId && !x.Excluded));
             if(Book.Rented) {
                 response.Success = false;
                 response.Errors = new List<Error>{
                    new Error{ code = "01", message = "o Livro esta indisponível"},
                    new Error{ code = "02", message ="Já foi alugado."}
                };
                return await Task.FromResult(BadRequest(response));
             }
             _context.Books.Update(Book.Rent());

             var rent = model.MapperBook();
             _context.RentBooks.Add(rent);
             _context.SaveChanges();

            response.Success = true;
            response.Result = true;

            return Ok(response);
        }
        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponsePostModel>> Post(Guid id, [FromBody] RentBookModel model)
        {
            var response = new BooksResponsePostModel();
             var Book = await Task.FromResult( _context.Books.FirstOrDefault(x => x.Id == model.BookId && !x.Excluded));
             if(Book == null) {
                 response.Success = false;
                 response.Errors = new List<Error>{
                    new Error{ code = "01", message = "o Livro não foi encontrado tente novamente!"}
                };
                return await Task.FromResult(BadRequest(response));
             }
             Book.Rented = false;
             _context.Books.Update(Book);
             if(_context.RentBooks.Any(x => x.BookId == model.BookId && x.UserId == model.UserId)){
                var rent = _context.RentBooks.FirstOrDefault(x => x.BookId == model.BookId && x.UserId == model.UserId);
                rent.Delivery();
                _context.RentBooks.Update(rent);
             }
             _context.SaveChanges();

            response.Success = true;
            response.Result = Book;

            return Ok(response);
        }


    }
}