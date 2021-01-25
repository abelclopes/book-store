using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Api.Model
{
    public class BooksResponseModel
    {
        public BooksResponseModel(bool _success, PaginationList<Book> _result, List<Error> _errors)
        {
            Success = _success;
            Result = _result;
            Errors = _errors;
        }

        public BooksResponseModel(bool success)
        {
            this.Success = success;

        }

        public BooksResponseModel()
        {
        }

        public bool Success { get; set; }
        public PaginationList<Book> Result { get; set; }
        public List<Error> Errors { get; set; }

    }
    public class BooksResponsePostModel
    {
        public BooksResponsePostModel()
        {
        }

        public BooksResponsePostModel(bool _success, Book _result, List<Error> _errors)
        {
            Success = _success;
            Result = _result;
            Errors = _errors;
        }

        public bool Success { get; set; }
        public Book Result { get; set; }
        public List<Error> Errors { get; set; }

    }
    public class BooksResponseBoolModel
    {
        public bool Success { get; set; }
        public bool Result { get; set; }
        public List<Error> Errors { get; set; }

    }

    public class ShowMensageResponse
    {

        public static BooksResponseModel BuildResponse(List<Book> books, PaginationParams model)
        {
            if (model.PageSize == 0)
            {
                model.PageSize = 500;
            }
            var paginationList = new PaginationList<Book>(model.PageNumber, model.PageSize);
            paginationList.Read(books);

            return new BooksResponseModel(books.Any(), paginationList, null);
        }

    }
}