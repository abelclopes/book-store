
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
        public async Task<ActionResult<BooksResponseModel>> Get([FromQuery]PaginationParams model)
        {

            var books = await Task.FromResult( _context.Books.Where(x => !x.Excluded).ToList());
            var response = ShowMensageResponse.BuildResponse(books, model);
            if(!response.Success) {
                var notFound = new NotFoundResult();
                return notFound;
            }

            return Ok(response);
        }

        [HttpGet("{id}")]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponsePostModel>> GetById([FromRoute] string id)
        {
            
            var response = new BooksResponsePostModel();
            if(!string.IsNullOrEmpty(id)){
                var guidId =  Guid.Parse(id);
                if(_context.Books.Any(x => !x.Excluded && x.Id == guidId)) { 
                    response.Success = true;
                    response.Result = await Task.FromResult( _context.Books.FirstOrDefault(x => !x.Excluded && x.Id == guidId));
                }
                else
                { 
                    response.Success = false;
                }

            }
            if(!response.Success) {
                response.Errors = new List<Error>{
                    new Error{ code = "03", message = "Não foi possivel encontrar o Livro"}
                };
                return await Task.FromResult(BadRequest(response));
            }

            return Ok(response);
        }


        [HttpPost]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponsePostModel>> Post([FromBody]BookModel model)
        {
            var response = new BooksResponsePostModel();
           
            if(!string.IsNullOrEmpty(model.Title)){
                _context.Books.Add(model.book());
                await _context.SaveChangesAsync();
                var book = _context.Books.FirstOrDefault(x => x.Title == model.Title);
                response.Success = true;
                response.Result = _context.Books.FirstOrDefault(x => x.Title == model.Title);
                return Ok(response);
            }
            if(!response.Success) {
                response.Errors = new List<Error>{
                    new Error{ code = "02", message = "Não foi possivel Cadastra o Livro"}
                };
                return await Task.FromResult(BadRequest(response));
            }

            response.Errors = new List<Error>{
                    new Error{ code = "01", message = "Dados Enviados são inválidos"}
                };
            return await Task.FromResult(BadRequest(response));

        }

        [HttpPut("{id}")]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponsePostModel>> Put([FromRoute] string id,[FromBody]BookModel model)
        {
            var response = new BooksResponsePostModel();

            if (!string.IsNullOrEmpty(id) && _context.Books.Any(x => !x.Excluded && x.Id.ToString() == id))
            {
                var book = _context.Books.SingleOrDefault(x => x.Id.ToString() == id);
                _context.Books.Update(model.UpdateByBook(book));
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Result = _context.Books.FirstOrDefault(x => x.Id.ToString() == id);
                return Ok(response);
            }
            if (!response.Success)
            {
                response.Errors = new List<Error>{
                    new Error{ code = "02", message = "Não foi possivel Cadastra o Livro"}
                };
                return await Task.FromResult(BadRequest(response));
            }

            response.Errors = new List<Error>{
                    new Error{ code = "01", message = "Dados Enviados são inválidos"}
                };
            return await Task.FromResult(BadRequest(response));

        }

        [HttpDelete("{id}")]
        [Authorize]
        [ProducesResponseType(201)]
        [ProducesResponseType(401)]
        [ProducesResponseType(403)]
        public async Task<ActionResult<BooksResponseBoolModel>> Delete([FromRoute] string id)
        {
            var response = new BooksResponseBoolModel();

            if (!string.IsNullOrEmpty(id) && _context.Books.Any(x => !x.Excluded && x.Id.ToString() == id))
            {
                var book = _context.Books.SingleOrDefault(x => !x.Excluded && x.Id.ToString() == id);
                book.Deleted();
                _context.Books.Update(book);
                await _context.SaveChangesAsync();
                response.Success = true;
                response.Result =true;
                return Ok(response);
            }
            if (!response.Success)
            {
                response.Errors = new List<Error>{
                    new Error{ code = "02", message = "Não foi possivel remover o Livro"}
                };
                return await Task.FromResult(BadRequest(response));
            }

            response.Errors = new List<Error>{
                new Error{ code = "01", message = "Dados Enviados são inválidos"}
            };
            return await Task.FromResult(BadRequest(response));

        }

    }
}