using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Interface;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Api.Model
{
    public class BookModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string Year { get; set; }
        public Guid CategoryId { get; set; }
        public string PublishingCompany { get; set; }

        internal Book book()
        {
            return new Book(
                Title = Title,
                Description = Description,
                Author = Author,
                Year = Year,
                CategoryId = CategoryId,
                PublishingCompany = PublishingCompany
            );
        }
        internal Book UpdateByBook(Book model)
        {
            model.Title = Title;
            model.Description = Description;
            model.Author = Author;
            model.Year = Year;
            model.CategoryId = CategoryId;
            model.PublishingCompany = PublishingCompany;
            return model;
        }

    }
}